import {Containerr} from '../styles/StyleServices'

import Image1 from '../images/heading-ic.png'

import Galerry1 from '../images/gallery-img1.png'
import Galerry2 from '../images/gallery-img2.png'
import Galerry3 from '../images/gallery-img3.png'
import Galerry4 from '../images/gallery-img4.png'
import Galerry5 from '../images/gallery-img5.png'
import Galerry6 from '../images/gallery-img6.png'
import Galerry7 from '../images/gallery-img7.png'

import Headerr from '../Header'
import Foot from '../Footer'

import {
    Page,
    Tittle,
    Img1,
    GalleryWrapper,
    GalleryImage,
    ImgGall,
} from '../styles/StyleGallery'




function Gallery(){
    return(
    <>
        <Page>
            <Headerr/>
            <Containerr>
                <Tittle>Galeria de Fotos</Tittle>
                <Img1 src={Image1}/>

                <GalleryWrapper>
                    <GalleryImage>
                        <ImgGall src={Galerry1}/>
                    </GalleryImage>
                    <GalleryImage>
                        <ImgGall src={Galerry2}/>
                    </GalleryImage>
                    <GalleryImage>
                        <ImgGall src={Galerry3}/>
                    </GalleryImage>
                    <GalleryImage>
                        <ImgGall src={Galerry4}/>
                    </GalleryImage>
                    <GalleryImage>
                        <ImgGall src={Galerry5}/>
                    </GalleryImage>
                    <GalleryImage>
                        <ImgGall src={Galerry6}/>
                    </GalleryImage>
                    <GalleryImage>
                        <ImgGall src={Galerry7}/>
                    </GalleryImage>
                </GalleryWrapper>
            </Containerr>
            
        </Page>
        <Foot/>
    </>
    )
}

export default Gallery