import React from 'react';
import { ArrowUpRight, Heart, Sparkles } from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import { BOUTIQUE_INFO, INSTAGRAM_POSTS } from '../data/boutiqueData';

export const GalleryPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24 animate-fade-in">
      {/* Page Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-beige/50 text-mocha text-[11px] uppercase tracking-[0.25em] font-medium">
          <InstagramIcon className="w-3.5 h-3.5 text-mocha" />
          <span>Social Journal</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl text-darkbrown font-normal uppercase tracking-tight">
          FOLLOW OUR STYLE
        </h1>
        <div className="w-16 h-[1.5px] bg-mocha/40 mx-auto my-2" />
        <p className="text-sm text-darkbrown/75 font-light leading-relaxed">
          Step behind the scenes into our atelier. Follow{' '}
          <a
            href={BOUTIQUE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-darkbrown hover:text-mocha underline underline-offset-4"
          >
            {BOUTIQUE_INFO.instagramHandle}
          </a>{' '}
          for daily couture stories, client fittings, and latest fabric arrivals.
        </p>
      </section>

      {/* 6 Grid Slots */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-beige/30 shadow-sm hover:shadow-luxury transition-all duration-300 block"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-darkbrown/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5 sm:p-4 text-ivory">
                <div className="flex justify-between items-center text-[10px] uppercase tracking-wider text-beige">
                  <span>{post.tag}</span>
                  <InstagramIcon className="w-4 h-4 text-beige" />
                </div>

                <div className="space-y-1">
                  <p className="text-[11px] text-ivory/90 line-clamp-3 leading-snug font-light">
                    {post.caption}
                  </p>
                  {post.likes && (
                    <div className="flex items-center gap-1 text-[10px] text-beige pt-1">
                      <Heart className="w-3 h-3 fill-beige" />
                      <span>{post.likes} likes</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-beige/80 pt-1 border-t border-white/20">
                  <span>View Post</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a
            href={BOUTIQUE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-darkbrown text-ivory text-xs uppercase tracking-[0.2em] font-medium shadow-luxury hover:bg-mocha transition-all duration-300 w-full sm:w-auto"
          >
            <InstagramIcon className="w-4 h-4 text-beige" />
            <span>Follow {BOUTIQUE_INFO.instagramHandle}</span>
          </a>

          <a
            href={BOUTIQUE_INFO.studioInstagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-beige/80 bg-white/60 text-darkbrown text-xs uppercase tracking-[0.2em] font-medium shadow-sm hover:bg-beige/40 transition-all duration-300 w-full sm:w-auto"
          >
            <InstagramIcon className="w-4 h-4 text-mocha" />
            <span>Follow {BOUTIQUE_INFO.studioInstagramHandle}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
