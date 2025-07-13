import React, { useState, useRef } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';

const DEFAULT_WEBSITES = [
  { id: 1, name: "zenvoice.io" },
  { id: 2, name: "acme.com" },
];

const DEFAULT_NOTIFICATIONS = [
  {
    id: 1,
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png",
    title: "Angry Customer",
    message: "WHERE IS MY INVOIZE?",
    time: "1m",
    iconType: "image",
  },
  {
    id: 2,
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Stripe_Logo%2C_revised_2016.png",
    title: "Stripe: Refund ⚠️",
    message: "Reason: Invoice not provided",
    time: "now",
    iconType: "image",
  },
];

const DEFAULT_CONFIG = {
  startAfter: 500,
  sendEvery: 1000,
  hideAfter: 200000,
};

export default function Dashboard() {
  const [websites, setWebsites] = useState(DEFAULT_WEBSITES);
  const [selectedWebsiteId, setSelectedWebsiteId] = useState(websites[0].id);
  const [newWebsiteName, setNewWebsiteName] = useState("");
  const [notificationsByWebsite, setNotificationsByWebsite] = useState({
    1: DEFAULT_NOTIFICATIONS,
    2: [],
  });
  const [configByWebsite, setConfigByWebsite] = useState({
    1: { ...DEFAULT_CONFIG },
    2: { ...DEFAULT_CONFIG },
  });
  const [snippet, setSnippet] = useState("");
  const [copied, setCopied] = useState(false);
  const [showTestNotification, setShowTestNotification] = useState(false);
  const [testNotificationIndex, setTestNotificationIndex] = useState(0);
  const [shownTestNotifications, setShownTestNotifications] = useState([]);
  const testNotificationTimeout = useRef(null);
  const fileInputRefs = useRef({});

  const notifications = notificationsByWebsite[selectedWebsiteId] || [];
  const websiteName = websites.find(w => w.id === selectedWebsiteId)?.name || "";
  const config = configByWebsite[selectedWebsiteId] || DEFAULT_CONFIG;

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john@example.com"
  };

  const handleAddWebsite = () => {
    if (!newWebsiteName.trim()) return;
    const newId = websites.length ? Math.max(...websites.map(w => w.id)) + 1 : 1;
    setWebsites([...websites, { id: newId, name: newWebsiteName.trim() }]);
    setNewWebsiteName("");
    setSelectedWebsiteId(newId);
    setNotificationsByWebsite(n => ({ ...n, [newId]: [] }));
    setConfigByWebsite(c => ({ ...c, [newId]: { ...DEFAULT_CONFIG } }));
  };

  const handleAddNotification = () => {
    const newId = notifications.length ? Math.max(...notifications.map(n => n.id)) + 1 : 1;
    const newNotif = {
      id: newId,
      icon: "",
      title: "Title",
      message: "Message...",
      time: "now",
      iconType: "emoji",
    };
    setNotificationsByWebsite(n => ({
      ...n,
      [selectedWebsiteId]: [...notifications, newNotif],
    }));
  };

  const handleDeleteNotification = (id) => {
    setNotificationsByWebsite(n => ({
      ...n,
      [selectedWebsiteId]: notifications.filter(notif => notif.id !== id),
    }));
  };

  const handleNotificationChange = (id, field, value) => {
    setNotificationsByWebsite(n => ({
      ...n,
      [selectedWebsiteId]: notifications.map(notif =>
        notif.id === id ? { ...notif, [field]: value } : notif
      ),
    }));
  };

  const handleIconUpload = (id, file) => {
    const reader = new FileReader();
    reader.onload = e => {
      setNotificationsByWebsite(n => ({
        ...n,
        [selectedWebsiteId]: notifications.map(notif =>
          notif.id === id ? { ...notif, icon: e.target.result, iconType: "image" } : notif
        ),
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleIconClick = (id) => {
    if (!fileInputRefs.current[id]) return;
    fileInputRefs.current[id].click();
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = Array.from(notifications);
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);
    setNotificationsByWebsite(n => ({
      ...n,
      [selectedWebsiteId]: reordered,
    }));
  };

  const handleConfigChange = (field, value) => {
    setConfigByWebsite(c => ({
      ...c,
      [selectedWebsiteId]: {
        ...config,
        [field]: value,
      },
    }));
  };

  const handleUpdate = () => {
    // Generate a working snippet with all notification data and config as JSON in a data attribute
    const data = JSON.stringify({
      notifications: notifications.map(({id: _, ...rest}) => rest),
      config,
    });
    const code = `<script defer data-domain="${websiteName}" data-flashbar='${data.replace(/'/g, "&#39;")}' src="https://flashbar.co/js/script.js"></script>`;
    setSnippet(code);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  const handleTestNotification = () => {
    if (notifications.length === 0) return;
    setShowTestNotification(true);
    setTestNotificationIndex(0);
    setShownTestNotifications([0]);
    if (testNotificationTimeout.current) clearTimeout(testNotificationTimeout.current);
    showNextTestNotification(0);
  };

  const showNextTestNotification = (index) => {
    setShowTestNotification(true);
    setTestNotificationIndex(index);
    setShownTestNotifications((prev) => {
      if (!prev.includes(index)) return [index, ...prev]; // insert at top
      return prev;
    });
    if (testNotificationTimeout.current) clearTimeout(testNotificationTimeout.current);
    if (index < notifications.length - 1) {
      testNotificationTimeout.current = setTimeout(() => {
        showNextTestNotification(index + 1);
      }, 2000);
    } else {
      testNotificationTimeout.current = setTimeout(() => {
        setShowTestNotification(false);
        setShownTestNotifications([]);
      }, 2000);
    }
  };

  return (
    <main className="min-h-screen bg-[#18181b] flex flex-col">
      {/* Custom Dashboard Header */}
      <header className="bg-[#23232a] border-b border-[#33343a] px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Flashbar Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/flashbar.png"
              alt="Flashbar logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-[#f3f4f6]">Flashbar</span>
          </div>
          
          {/* Right side - Account and Test Button */}
          <div className="flex items-center gap-4">
            {/* Account Name */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#C0EA00] rounded-full flex items-center justify-center">
                <span className="text-[#23232a] font-bold text-sm">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="text-[#e5e7eb] font-medium">{user.name}</span>
            </div>
            
            {/* Test Button */}
            <button
              onClick={handleTestNotification}
              disabled={notifications.length === 0}
              className="px-4 py-2 bg-[#C0EA00] text-[#23232a] font-bold rounded-lg hover:bg-[#A5C900] focus:outline-none focus:ring-2 focus:ring-[#C0EA00] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Test Notifications
            </button>
          </div>
        </div>
      </header>

      {/* Live Test Notification */}
      {showTestNotification && notifications.length > 0 && (
        <div className="fixed top-24 right-3 z-50 flex flex-col items-end gap-2" style={{ width: 380 }}>
          <AnimatePresence initial={false}>
            {shownTestNotifications.map((idx, i) => (
              <motion.div
                key={idx}
                layout
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 60, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 40, duration: 0.7, delay: i === 0 ? 0.1 : 0 }}
                className="bg-white border border-[#e5e7eb] rounded-xl p-4 shadow-xl w-[380px] min-h-[64px] flex items-center gap-4"
                style={{ boxSizing: 'border-box' }}
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-[#e5e7eb] overflow-hidden">
                  {notifications[idx].iconType === "image" && notifications[idx].icon ? (
                    <Image 
                      src={notifications[idx].icon} 
                      alt="icon" 
                      className="w-full h-full object-contain" 
                      width={56} 
                      height={56} 
                    />
                  ) : (
                    <span className="text-2xl text-[#23232a]">
                      {notifications[idx].icon || "🖼️"}
                    </span>
                  )}
                </div>
                {/* Content */}
                <div className="flex-1 flex flex-col gap-1">
                  <div className="font-bold text-base text-[#23232a] leading-tight">
                    {notifications[idx].title}
                  </div>
                  <div className="text-[#23232a] text-sm font-normal leading-tight">
                    {notifications[idx].message}
                  </div>
                </div>
                {/* Time */}
                <div className="text-[#23232a] font-semibold text-xs whitespace-nowrap opacity-60">
                  {notifications[idx].time}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Main Dashboard Content */}
      <div className="flex-1 flex flex-col items-center py-8 px-2">
        {/* Website Tabs */}
        <div className="w-full max-w-6xl flex items-center gap-2 mb-8">
          {websites.map(site => (
            <button
              key={site.id}
              className={`px-6 py-2 rounded-t-lg border-b-2 font-bold text-base transition focus:outline-none ${selectedWebsiteId === site.id ? "bg-[#23232a] border-[#C0EA00] text-[#C0EA00]" : "bg-[#18181b] border-transparent text-[#e5e7eb] hover:bg-[#23232a]"}`}
              onClick={() => setSelectedWebsiteId(site.id)}
              aria-label={`Select website ${site.name}`}
              style={{ minWidth: 120 }}
            >
              {site.name}
            </button>
          ))}
          {/* Add website tab */}
          <div className="flex items-center ml-2">
            <input
              type="text"
              className="px-3 py-2 rounded-l-lg border border-[#33343a] bg-[#23232a] text-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-[#C0EA00]"
              placeholder="Add website..."
              value={newWebsiteName}
              onChange={e => setNewWebsiteName(e.target.value)}
              aria-label="New website name"
              style={{ minWidth: 120 }}
            />
            <button
              className="px-4 py-2 rounded-r-lg bg-[#C0EA00] text-[#23232a] font-bold hover:bg-[#A5C900] focus:outline-none focus:ring-2 focus:ring-[#C0EA00]"
              onClick={handleAddWebsite}
              aria-label="Add website"
            >
              +
            </button>
          </div>
        </div>
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
          {/* Left: Config Panel */}
          <aside className="w-full md:w-1/3 max-w-xs bg-[#23232a] rounded-2xl shadow p-8 border border-[#33343a] flex flex-col items-center mb-8 md:mb-0">
            <div className="w-full max-w-md mx-auto">
              <label className="block mb-2 text-base font-semibold text-[#f3f4f6]" htmlFor="startAfter">Start Flashbar after (ms)</label>
              <input
                id="startAfter"
                aria-label="Start Flashbar after (ms)"
                type="number"
                className="mb-4 w-full px-5 py-3 rounded-full border border-[#33343a] bg-[#18181b] text-[#f3f4f6] text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#C0EA00]"
                value={config.startAfter}
                onChange={e => handleConfigChange("startAfter", Number(e.target.value))}
              />
              <label className="block mb-2 text-base font-semibold text-[#f3f4f6]" htmlFor="sendEvery">Send message every (ms)</label>
              <input
                id="sendEvery"
                aria-label="Send message every (ms)"
                type="number"
                className="mb-4 w-full px-5 py-3 rounded-full border border-[#33343a] bg-[#18181b] text-[#f3f4f6] text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#C0EA00]"
                value={config.sendEvery}
                onChange={e => handleConfigChange("sendEvery", Number(e.target.value))}
              />
              <label className="block mb-2 text-base font-semibold text-[#f3f4f6]" htmlFor="hideAfter">Hide message after (ms)</label>
              <input
                id="hideAfter"
                aria-label="Hide message after (ms)"
                type="number"
                className="mb-6 w-full px-5 py-3 rounded-full border border-[#33343a] bg-[#18181b] text-[#f3f4f6] text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#C0EA00]"
                value={config.hideAfter}
                onChange={e => handleConfigChange("hideAfter", Number(e.target.value))}
              />
              <button
                aria-label="Update notifications"
                className="w-full py-3 rounded-full bg-[#C0EA00] text-[#23232a] font-bold text-lg shadow hover:bg-[#A5C900] focus:outline-none focus:ring-2 focus:ring-[#C0EA00] transition"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </aside>
          {/* Right: Notification Editor */}
          <section className="flex-1 bg-[#23232a] rounded-2xl shadow p-8 border border-[#33343a] flex flex-col items-center min-h-[400px] relative">
            <div className="w-full flex items-center justify-between mb-4">
              <div className="text-xl font-bold text-[#f3f4f6]">Notifications for <span className="text-[#C0EA00]">{websiteName}</span></div>
              <div className="flex items-center gap-2">
                <button
                  aria-label="Add notification"
                  className="px-3 py-2 rounded-full bg-[#C0EA00] text-[#23232a] font-bold text-lg shadow hover:bg-[#A5C900] focus:outline-none focus:ring-2 focus:ring-[#C0EA00] transition"
                  style={{ minWidth: 0, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  onClick={handleAddNotification}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </button>
                <button
                  aria-label="Update notifications"
                  className="px-5 py-2 rounded-full bg-[#C0EA00] text-[#23232a] font-bold text-lg shadow hover:bg-[#A5C900] focus:outline-none focus:ring-2 focus:ring-[#C0EA00] transition"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="notif-list">
                {(provided) => (
                  <ul className="w-full space-y-6" ref={provided.innerRef} {...provided.droppableProps}>
                    {notifications.map((notif, idx) => (
                      <Draggable key={notif.id} draggableId={notif.id.toString()} index={idx}>
                        {(provided, snapshot) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className={`bg-[#18181b] rounded-2xl p-6 flex items-center gap-4 shadow border border-[#33343a] relative transition ${snapshot.isDragging ? "ring-2 ring-[#C0EA00]" : ""}`}
                          >
                            {/* Drag handle */}
                            <span {...provided.dragHandleProps} className="flex flex-col justify-center items-center cursor-move text-[#6b7280] mr-1 select-none">
                              <span className="block w-1 h-1 bg-[#6b7280] rounded-full mb-0.5"></span>
                              <span className="block w-1 h-1 bg-[#6b7280] rounded-full mb-0.5"></span>
                              <span className="block w-1 h-1 bg-[#6b7280] rounded-full"></span>
                            </span>
                            {/* Icon upload or emoji */}
                            <div className="w-14 h-14 rounded-xl bg-[#23232a] flex items-center justify-center border border-[#33343a] overflow-hidden cursor-pointer" onClick={() => handleIconClick(notif.id)}>
                              {notif.iconType === "image" && notif.icon ? (
                                <Image src={notif.icon} alt="icon" className="w-full h-full object-contain" width={56} height={56} />
                              ) : (
                                <span className="text-2xl text-[#e5e7eb]">{notif.icon || "🖼️"}</span>
                              )}
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                ref={el => (fileInputRefs.current[notif.id] = el)}
                                onChange={e => {
                                  if (e.target.files && e.target.files[0]) handleIconUpload(notif.id, e.target.files[0]);
                                }}
                              />
                            </div>
                            {/* Notification content */}
                            <div className="flex-1 flex flex-col gap-1">
                              <input
                                aria-label="Title"
                                className="w-full font-bold text-lg px-4 py-2 rounded bg-[#23232a] border border-[#33343a] text-[#f3f4f6] mb-1 focus:outline-none focus:ring-2 focus:ring-[#C0EA00]"
                                value={notif.title}
                                onChange={e => handleNotificationChange(notif.id, "title", e.target.value)}
                              />
                              <input
                                aria-label="Message"
                                className="w-full px-4 py-2 rounded bg-[#23232a] border border-[#33343a] text-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-[#C0EA00]"
                                value={notif.message}
                                onChange={e => handleNotificationChange(notif.id, "message", e.target.value)}
                              />
                            </div>
                            {/* Time input */}
                            <input
                              aria-label="Time"
                              className="w-14 px-3 py-2 rounded-full border border-[#33343a] bg-[#23232a] text-[#bfae9b] font-semibold text-sm text-center focus:outline-none focus:ring-2 focus:ring-[#C0EA00]"
                              value={notif.time}
                              onChange={e => handleNotificationChange(notif.id, "time", e.target.value)}
                            />
                            {/* Delete button */}
                            <button
                              aria-label="Delete notification"
                              className="flex items-center gap-1 text-[#C0EA00] hover:text-[#A5C900] text-base font-semibold ml-2 focus:outline-none"
                              onClick={() => handleDeleteNotification(notif.id)}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12zM19 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2v2m5 4v6m4-6v6" /></svg>
                              Delete
                            </button>
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
          </section>
        </div>
        {/* Bottom: Snippet Generator */}
        <section className="w-full max-w-2xl bg-[#23232a] rounded-xl shadow p-6 flex flex-col items-center mt-8 border border-[#33343a]">
          <div className="mb-2 text-lg font-semibold text-center text-[#f3f4f6]">Make your Flashbar live 🎉</div>
          <div className="mb-1 text-sm text-[#e5e7eb] text-center">Paste this snippet in the &lt;head&gt; of your website.</div>
          <div className="w-full flex items-center bg-[#18181b] rounded-lg px-4 py-3 mt-3 mb-2 border border-[#33343a]">
            <code className="flex-1 font-mono text-sm select-all text-[#f3f4f6] overflow-x-auto whitespace-nowrap" tabIndex={0} aria-label="Embed code snippet">
              {snippet || "<script defer ... ></script>"}
            </code>
            <button
              aria-label="Copy code snippet"
              className="ml-3 px-2 py-1 rounded bg-[#C0EA00] text-[#23232a] hover:bg-[#A5C900] focus:ring-2 focus:ring-[#C0EA00] transition flex items-center"
              onClick={handleCopy}
              tabIndex={0}
              disabled={!snippet}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8a2 2 0 002-2V8a2 2 0 00-2-2H8a2 2 0 00-2 2v6a2 2 0 002 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2" /></svg>
              <span className="ml-1 text-xs">Copy</span>
            </button>
            {copied && (
              <span className="ml-2 text-[#C0EA00] text-xs font-semibold">Copied!</span>
            )}
          </div>
          <div className="mt-1 text-xs text-[#e5e7eb] flex items-center gap-1">
            <span className="text-lg">⚠️</span> Your Flashbar will not show until you add 1+ notifications and click Update.
          </div>
        </section>
      </div>
    </main>
  );
}
