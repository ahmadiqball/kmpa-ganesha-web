import classNames from 'classnames';
import Image from 'next/image';
import { FaInstagram, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa6';

import type { PickPageComponent } from '~/sanity/lib/page-component.entity';

import { sanityImageUrlFor } from '~/sanity/lib/image';

const SOCIAL_MEDIA = [
  { icon: FaInstagram, color: 'hover:color-[#E1306C]' },
  { icon: FaLinkedinIn, color: 'hover:color-[#0077B5]' },
  { icon: FaRegEnvelope, color: 'hover:color-[#D44638]' },
];

export function BlockExecutiveBoard({ description, members, title }: PickPageComponent<'executiveBoard'>) {
  return (
    <section className="mx-auto max-w-300 px-4 py-12 md:my-24">
      <h4 className="text-center text-2xl color-[#0A2429] font-bold md:text-6xl sm:text-4xl">{ title }</h4>

      <p className="mt-4 text-center text-sm md:mt-8 md:text-xl sm:text-lg">{ description }</p>

      <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-8 md:mt-16 sm:gap-y-12">
        { members?.map((member, index) => (
          <div className={ classNames('flex-basis-full', index === 0 ? 'sm:flex-basis-full' : 'sm:flex-basis-1/5') }>
            <div className={ classNames('w-full', {
              'sm:max-w-60 mx-auto': index === 0,
            }) }
            >
              <Image
                alt={ member.name }
                className="mx-auto max-w-36 rounded-full lg:max-w-60"
                height={ 400 }
                src={ sanityImageUrlFor(member.image).url() }
                width={ 400 }
              />

              <div className="mt-4 text-center font-medium">
                <p className="text-xs color-gray md:text-sm">{ member.memberID }</p>

                <p className="text-base md:text-xl">{ member.name }</p>

                <p className="text-sm color-gray md:text-base">{ member.position }</p>

                <div className="mt-1 flex items-center justify-center gap-3 md:mt-3">
                  { SOCIAL_MEDIA.map((item) => (
                    <div>
                      <item.icon className={ classNames('size-4 color-gray hover:cursor-pointer transition-color-280', item.color) } />
                    </div>
                  )) }
                </div>
              </div>

            </div>
          </div>
        )) }
      </div>
    </section>
  );
}
