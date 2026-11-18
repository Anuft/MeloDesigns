import React from 'react';
import { ArrowUpRight, Heart, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BOUTIQUE_INFO, INSTAGRAM_POSTS } from '../data/boutiqueData';

export const InstagramGallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-beige/40 text-mocha text-[11px] uppercase tracking-[0.25em] font-medium">
            <InstagramIcon className="w-3.5 h-3.5 text-mocha" />
            <span>Social Journal</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-darkbrown font-normal tracking-tight uppercase">
            FOLLOW OUR STYLE
          </h2>

          <div className="w-16 h-[1.5px] bg-mocha/40 mx-auto my-3" />

          <p className="text-sm sm:text-base text-darkbrown/70 font-light leading-relaxed">
            Step behind the scenes into our atelier. Follow{' '}
            <a
              href={BOUTIQUE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-darkbrown hover:text-mocha underline underline-offset-4 transition-colors"
            >
              {BOUTIQUE_INFO.instagramHandle}
            </a>{' '}
            for daily couture stories, client fittings, and latest fabric arrivals.
          </p>
        </div>

        {/* 6 Image Slots Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-beige/30 shadow-sm hover:shadow-luxury transition-all duration-300 block"
            >
              {/* Instagram Image */}
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Hover Overlay with Instagram details */}
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

        {/* Follow Button & Handle Banner */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href={BOUTIQUE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-darkbrown text-ivory text-xs uppercase tracking-[0.2em] font-medium shadow-luxury hover:bg-mocha transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <InstagramIcon className="w-4 h-4 text-beige" />
            <span>Follow {BOUTIQUE_INFO.instagramHandle}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
