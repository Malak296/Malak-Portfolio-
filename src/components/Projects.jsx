import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { projectsData } from '../data/portfolioData';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-3.5 py-1 mb-2 text-[11px] font-bold tracking-wider text-sky-800 bg-sky-100/90 rounded-full border border-sky-200">
            Interactive Showcase
          </span>
          <h2 className="text-3xl font-extrabold text-slate-800">
            Featured Projects 🎀
          </h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
          }}
          className="pb-14 !px-2 custom-swiper"
        >
          {projectsData.map((project) => (
            <SwiperSlide key={project.id} className="h-auto">
              <div className="h-full bg-white/85 backdrop-blur-md p-6 rounded-3xl border border-rose-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="text-base font-bold text-slate-800">
                      {project.title}
                    </h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-rose-100 text-rose-700 rounded-md">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-bold px-2 py-0.5 bg-sky-50 text-sky-700 rounded-md border border-sky-100">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center py-2 text-xs font-bold bg-rose-200 hover:bg-rose-300 text-slate-800 rounded-xl transition-colors shadow-xs"
                    >
                      Live Demo 🚀
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center py-2 text-xs font-bold bg-white hover:bg-sky-50 text-slate-700 border border-slate-200 rounded-xl transition-colors"
                    >
                      GitHub 💻
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Projects;