import TestimonialsAvatars from "./TestimonialsAvatars";
import { AnimatedList } from "./magicui/animated-list";
import NotificationCard from "./NotificationCard";
import { GetStartedButton } from "@/components/ui/get-started-button";

const Hero = () => {
  return (
    <section id="home" className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-10">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-5xl lg:text-6xl tracking-tight md:-mb-2">
        Show hidden pains 💡 turn visitors into customers
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
        Grab attention with popups that speak directly to your visitor&rsquo;s doubts, fears, and needs — then turn that emotional spark into confident action, guiding them exactly where you want them to go.
        </p>
        <GetStartedButton />

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full flex justify-center">
        <AnimatedList delay={1500} className="w-full max-w-md">
          <NotificationCard
            icon="/images/github.svg"
            title="GitHub"
            message="No new commits this week"
            subtext="Is your product development stalling?"
            color="text-[#24292F]"
            hideTitle
          />
          <NotificationCard
            icon="/images/gmail.svg"
            title="Gmail"
            message="0 new leads in your inbox"
            subtext="Are your campaigns reaching anyone?"
            color="text-[#EA4335]"
            hideTitle
          />
          <NotificationCard
            icon="/images/razorpay.png"
            title="Razorpay"
            message="No payments received today"
            subtext="Is your checkout process broken?"
            color="text-[#0B72E7]"
            hideTitle
          />
          <NotificationCard
            icon="/images/slack.svg"
            title="Slack"
            message="Team is silent"
            subtext="Is motivation dropping in your workspace?"
            color="text-[#611f69]"
            hideTitle
          />
          <NotificationCard
            icon="/images/supabase.png"
            title="Supabase"
            message="Database usage spiked"
            subtext="Are bots abusing your free tier?"
            color="text-[#3ECF8E]"
            hideTitle
          />
        </AnimatedList>
      </div>
    </section>
  );
};

export default Hero;
