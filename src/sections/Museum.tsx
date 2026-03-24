import { useState, useEffect, useRef } from 'react';
import { History, Award, BookOpen } from 'lucide-react';
import { museumConfig } from '../config';

// Icon lookup map for dynamic icon resolution from config strings
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  History, Award, BookOpen,
};

export function Museum() {
  // Null check: if config is empty, render nothing
  if (!museumConfig.mainTitle) return null;

  const [activeTab, setActiveTab] = useState(museumConfig.tabs[0]?.id || '');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const activeTabData = museumConfig.tabs.find(tab => tab.id === activeTab);

  return (
    <section
      id="museum"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-gold-500/5 to-transparent" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            {/* Section Header */}
            <div className="slide-in-left mb-10">
              <span className="font-script text-3xl text-gold-400 block mb-2">{museumConfig.scriptText}</span>
              <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
                {museumConfig.subtitle}
              </span>
              <h2 className="font-serif text-h1 text-white has-bar">
                {museumConfig.mainTitle}
              </h2>
            </div>

            {/* Introduction */}
            {museumConfig.introText && (
              <p className="fade-up text-white/75 leading-relaxed mb-10" style={{ transitionDelay: '0.1s' }}>
                {museumConfig.introText}
              </p>
            )}

            {/* Tabs */}
            {museumConfig.tabs.length > 0 && (
              <div className="fade-up flex flex-wrap gap-2 mb-6 sm:mb-8" style={{ transitionDelay: '0.15s' }}>
                {museumConfig.tabs.map((tab) => {
                  const IconComponent = iconMap[tab.icon];
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      aria-pressed={activeTab === tab.id}
                      className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-sm text-xs sm:text-sm transition-all duration-300 flex-1 sm:flex-none justify-center min-w-[calc(33%-4px)] sm:min-w-0 ${
                        activeTab === tab.id
                          ? 'bg-gold-500 text-white'
                          : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      {IconComponent && <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />}
                      <span className="truncate">{tab.name}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Tab Content */}
            <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
              {activeTabData && (
                <div className="p-4 sm:p-6 bg-white/5 rounded-lg border border-white/10 transition-all duration-300">
                  <h3 className="font-serif text-base sm:text-h5 text-white mb-3 sm:mb-4">
                    {activeTabData.content.title}
                  </h3>
                  <p className="text-white/75 leading-relaxed mb-4 text-sm sm:text-base">
                    {activeTabData.content.description}
                  </p>
                  <div className="flex items-center gap-3 text-gold-500">
                    <div className="w-6 sm:w-8 h-px bg-gold-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">
                      {activeTabData.content.highlight}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Horizontal Timeline */}
            {museumConfig.timeline.length > 0 && (
              <div className="fade-up mt-6 sm:mt-8" style={{ transitionDelay: '0.25s' }}>
                <div className="relative">
                  {/* Horizontal line - hidden on mobile */}
                  <div className="absolute top-3 left-0 right-0 h-px bg-gold-500/30 hidden sm:block" />
                  {/* Timeline points */}
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-2">
                    {museumConfig.timeline.map((event, index) => (
                      <div key={event.year} className={`relative flex flex-row items-center gap-3 sm:flex-col sm:flex-shrink-0 sm:min-w-[70px] ${index > 0 ? 'sm:border-l-0 border-t border-white/10 sm:border-t-0 pt-3 sm:pt-0' : ''}`}>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#141414] border-2 border-gold-500 z-10 flex-shrink-0" />
                        <div className="flex flex-col sm:items-center">
                          <span className="font-serif text-sm text-gold-500 sm:mt-2">{event.year}</span>
                          <span className="text-[11px] text-white/60 sm:mt-0.5 sm:text-center">{event.event}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Founder Photo & Quote */}
            {museumConfig.quote.text && (
              <div className="fade-up mt-8 flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6" style={{ transitionDelay: '0.3s' }}>
                {museumConfig.founderPhoto && (
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border-2 border-gold-500/30 shadow-lg flex-shrink-0">
                    <img
                      src={museumConfig.founderPhoto}
                      alt={museumConfig.founderPhotoAlt}
                      loading="lazy"
                      className="w-full h-full object-cover sepia"
                    />
                  </div>
                )}
                <div className="text-center sm:text-left">
                  {museumConfig.quote.prefix && (
                    <p className="font-script text-xl sm:text-2xl text-gold-400 mb-1">
                      &ldquo;{museumConfig.quote.prefix}&rdquo;
                    </p>
                  )}
                  <p className="text-white/70 text-xs sm:text-sm italic">
                    "{museumConfig.quote.text}"
                  </p>
                  {museumConfig.quote.attribution && (
                    <p className="text-gold-500 text-xs mt-2">
                      — {museumConfig.quote.attribution}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Image */}
          <div className="slide-in-right relative mt-8 lg:mt-0" style={{ transitionDelay: '0.15s' }}>
            <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-lg overflow-hidden">
              {museumConfig.tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`absolute inset-0 transition-all duration-500 ${
                    activeTab === tab.id
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                  }`}
                >
                  <img
                    src={tab.image}
                    alt={`${tab.name} - ${museumConfig.mainTitle}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                </div>
              ))}

              {/* Year Badge */}
              {museumConfig.yearBadge && (
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-black/40 backdrop-blur-sm border border-gold-500/40 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-serif text-lg sm:text-2xl text-gold-400">{museumConfig.yearBadge}</div>
                    <div className="text-[8px] sm:text-[10px] text-white/70 uppercase tracking-wider">{museumConfig.yearBadgeLabel}</div>
                  </div>
                </div>
              )}

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                  <div>
                    {museumConfig.openingHoursLabel && <p className="text-gold-400 text-xs sm:text-sm">{museumConfig.openingHoursLabel}</p>}
                    {museumConfig.openingHours && <p className="text-white text-base sm:text-lg">{museumConfig.openingHours}</p>}
                  </div>
                  {museumConfig.ctaButtonText && (
                    <button
                      onClick={() => {
                        const element = document.querySelector('#contact');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="btn-primary rounded-sm text-xs sm:text-sm px-4 sm:px-6 py-2 w-fit"
                      aria-label={museumConfig.ctaButtonText}
                    >
                      {museumConfig.ctaButtonText}
                    </button>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
