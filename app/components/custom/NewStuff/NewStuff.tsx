import {Navigation, Pagination, Scrollbar, A11y, EffectCoverflow} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
type Pods = {
    id: number;
    url: string;
}



const podsArr: Pods[] = [
    { id: 1, url: 'https://uvape.pro/image/cache/catalog/image/cache/catalog/podsystem/zqmicool/new/micool-violet-552x552.webp' },
    { id: 2, url: 'https://uvape.pro/image/cache/catalog/image/cache/catalog/podsystem/freemaxgalexnano/freemax-galex-nano_pink_cyan-552x552.webp' },
    { id: 3, url: 'https://uvape.pro/image/cache/catalog/image/cache/catalog/podsystem/uwellcaliburngz2/uwell-caliburn-gz2_purple-552x552.webp' },
    { id: 4, url: 'https://uvape.pro/image/cache/catalog/image/cache/catalog/jellyboxairx/jellybox-air-x+++-552x552.webp' },
    { id: 5, url: 'https://vandalvape.org/image/cache/catalog/starter-kit/boxmod/drag-4/Voopoo-Drag-4-Box-Mod-600x600.jpg' },
    { id: 6, url: 'https://uvape.pro/image/cache/catalog/image/cache/catalog/podsystem/freemaxgalexnano2/galex-nan2-552x552.webp' },
    { id: 7, url: 'https://uvape.pro/image/cache/catalog/image/cache/catalog/podsystem/charon_baby+/charonbaby2343434-552x552.webp' },
    { id: 8, url: 'https://uvape.pro/image/cache/catalog/image/cache/catalog/podsystem/freemaxgalexnano/galexnano_pred12344-552x552.webp' },
    { id: 9, url: 'https://uvape.pro/image/cache/catalog/image/cache/catalog/podsystem/voopoo/drag_s2/drags2252-552x552.webp' },
]


export default function NewStuff() {
    return (
        <div style={{ height: "100vh" }}>
            <h1 className="text-5xl text-center">Новинки нашого магазину</h1>
            <div className="flex justify-center items-center mt-10">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
                    spaceBetween={50}
                    slidesPerView={3}
                    effect='coverflow'
                    pagination={{ clickable: true }}
                    className='cursor-pointer'
                >
                    {
                        podsArr.map((item: Pods) => (
                            <SwiperSlide key={item.id}>
                                <img className="rounded-3xl w-40 sm:w-full" src={item.url} alt='d' />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
}
