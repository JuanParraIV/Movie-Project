
import tw from 'twin.macro';
import styled from 'styled-components';

export const CarouselContainer = styled.div`
 ${tw` relative `}`;
export const CarouselBorder = styled.div`
 ${tw` absolute w-full h-32 bg-gradient-to-t from-zinc-900 to-transparent bottom-0 z-20 `}`;
export const CarouselTextContainer = styled.div`${tw`absolute top-1/3 w-full text-center`}`;
export const CarouselTitle = styled.p`
  ${tw`text-white text-2xl lg:text-5xl mb-5`}`;
export const CarouselText = styled.p`
  ${tw`text-white text-sm lg:text-lg mb-5`}`;
export const CarouselTextButton = styled.button`
   ${tw``}`;
