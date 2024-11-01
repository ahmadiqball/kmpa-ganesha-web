import Image from 'next/image';

export function BlockDivider() {
  return (
    <Image
      alt="divider"
      className="relative"
      height={ 300 }
      src="/assets/images/gelombang (1).png"
      width={ 3000 }
    />
  );
}
