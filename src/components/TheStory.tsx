export function TheStoryPart1() {
  return (
    <section
      id="the-story"
      className="pt-20 pb-10 bg-navy relative border-t border-white/5"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <article className="prose prose-invert max-w-none text-text-muted text-[18px] md:text-[20px] leading-[1.8] tracking-wide font-sans text-center [&>p]:mb-4 [&>div]:mt-8 mx-auto max-w-[800px]">
          <p>
            Across the world, from ancient Asia to South America, from Rome to
            India, and through many cultures and traditions, humanity has
            carried stories of a great flood, a vessel of rescue, and a new
            beginning. Though these stories come from different peoples and
            places, they point to something deeply shared in the human heart:
            the longing for preservation, hope, restoration, and a future beyond
            destruction.
          </p>
        </article>
      </div>
    </section>
  );
}

export function TheStoryPart2() {
  return (
    <section className="py-10 bg-navy relative border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <header className="text-center mb-4">
          <h2 className="text-[2.5rem] leading-[1.2] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] font-cinzel">
            Our Mission{" "}
            <span className="text-gold block mt-2 text-xl">
              Ark Project
            </span>
          </h2>
        </header>
        <article className="prose prose-invert max-w-none text-text-muted text-[18px] md:text-[20px] leading-[1.8] tracking-wide font-sans text-center [&>p]:mb-4 [&>div]:mt-8 mx-auto max-w-[800px]">
          <p className="text-gold font-semibold text-2xl text-center font-cinzel tracking-wider leading-snug">
            The Ark Project is being created around that shared human story.
          </p>

          <p>
            Our vision is to build more than an attraction. We want to create a
            place where people from different cultures, religions, nations, and
            backgrounds can come together around one of the most ancient and
            universal narratives in human history. In a world often divided by
            language, belief, ethnicity, and social barriers, the Ark Project
            will stand as a powerful symbol of unity, remembrance, and hope.
          </p>

          <p>
            Visitors will step into an immersive experience centered on the
            biblical account of Noah’s Ark, presented with excellence,
            creativity, and reverence. Through exhibits, storytelling,
            architecture, cultural history, and interactive experiences, guests
            will encounter the story of the flood, the ark, judgment, mercy,
            preservation, and new beginnings.
          </p>
        </article>
      </div>
    </section>
  );
}

export function TheStoryPart3() {
  return (
    <section className="py-10 bg-navy relative border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <article className="prose prose-invert max-w-none text-text-muted text-[18px] md:text-[20px] leading-[1.8] tracking-wide font-sans text-center [&>p]:mb-4 [&>div]:mt-8 mx-auto max-w-[800px]">
          <p className="text-gold font-semibold text-2xl text-center font-cinzel tracking-wider leading-snug">
            But the heart of the project reaches even further.
          </p>

          <p>
            The Ark Project is designed to be a bridge. It will invite people
            who may come from very different traditions to discover a story that
            speaks across generations and cultures. It will welcome families,
            students, tourists, spiritual seekers, historians, educators, and
            people of faith. It will create a place where conversation can
            happen, where curiosity can grow, and where people can reflect on
            the deeper questions of life: What does it mean to be saved? What
            does it mean to begin again? What hope remains when the world feels
            broken?
          </p>

          <p>
            Located in Nepal, a nation already known as a meeting place of
            cultures, mountains, pilgrims, and travelers, the Ark Project has
            the opportunity to become a landmark destination. It can bless the
            local economy, create jobs, strengthen tourism, support education,
            and provide a meaningful experience for both local and international
            visitors.
          </p>

          <p>
            Your contribution is not simply helping build a structure. You are
            helping build a place of encounter. A place where ancient history,
            biblical truth, cultural connection, and modern creativity come
            together. A place where people from many backgrounds can walk
            through the same doors, experience the same story, and leave with a
            renewed sense of wonder, reflection, and hope.
          </p>

          <p>
            The Ark Project is a call to remember that humanity’s story is
            connected. It is a call to build something that outlasts us. It is a
            call to create a destination that speaks to the heart of the world.
          </p>
        </article>
      </div>
    </section>
  );
}

export function TheStoryPart4() {
  return (
    <section className="py-10 bg-navy relative border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <article className="prose prose-invert max-w-none text-text-muted text-[18px] md:text-[20px] leading-[1.8] tracking-wide font-sans text-center [&>p]:mb-4 [&>div]:mt-8 mx-auto max-w-[800px]">
          <div className="text-center mt-8 p-6 md:p-10 border border-gold/30 rounded-2xl bg-black/30 shadow-[0_0_40px_rgba(212,175,55,0.08)]">
            <p className="text-gold font-bold text-[16px] md:text-xl lg:text-2xl uppercase tracking-widest mb-4 font-cinzel leading-snug max-w-[600px] mx-auto ">
              Together, we can build a landmark of hope.
            </p>
            <p className="text-white text-[16px] md:text-[18px] font-light leading-relaxed max-w-[600px] mx-auto">
              Together, we can create a place where cultures meet, stories come
              alive, and people are invited to discover the promise of a new
              beginning.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
export default function TheStory() {
  return (
    <>
      <TheStoryPart1 />
      <TheStoryPart2 />
      <TheStoryPart3 />
      <TheStoryPart4 />
    </>
  );
}
