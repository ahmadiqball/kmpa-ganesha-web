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
    <section className="mx-auto my-24 max-w-300">
      <h4 className="text-center text-6xl color-[#0A2429] font-bold">{ title }</h4>

      <p className="mt-8 text-center text-xl">{ description }</p>

      <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-12">
        { members?.map((member, index) => (
          <div className={ index === 0 ? 'flex-basis-full' : 'flex-basis-1/5' }>
            <div className={ classNames('', {
              'max-w-1/5 mx-auto': index === 0,
            }) }
            >
              <Image
                alt={ member.name }
                className="mx-auto max-w-60 rounded-full"
                height={ 400 }
                src={ sanityImageUrlFor(member.image).url() }
                width={ 400 }
              />

              <div className="mt-4 text-center font-medium">
                <p className="text-sm color-gray">{ member.memberID }</p>

                <p className="text-xl">{ member.name }</p>

                <p className="color-gray">{ member.position }</p>

                <div className="mt-3 flex items-center justify-center gap-3">
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
