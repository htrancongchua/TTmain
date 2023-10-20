import { toast } from 'react-toastify';
import img1 from '../assets/images/img1.jpg'
import ProductBox from '../components/ProductBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ListImageDetail from '../components/ListImageDetail';
import { useEffect, useState } from 'react';
import products from '../assets/fake-data/product';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const [img, setImg] = useState();
    const [productDetail, setProductDetail] = useState()
    const [listImg, setListImg] = useState();
    const handleClickAdd = () => {
        toast.success("Thêm vào giỏ hàng thành công")
    }

    const params = useParams();

    const getDetailProduct = () => {
        const result = products.filter(item => item.id == params.id)
        setListImg([result[0].image01, result[0].image03, result[0].image02])
        setProductDetail(...result)
    }
    useEffect(() => {
        getDetailProduct();
    }, [params.id])

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    console.log(productDetail)
    const idx = getRandomInt(5)
    return (
        <div id="detail">
            <div className="container-detail">
                <div className='container-detail__left'>
                    <div className='container-detail__left-img'>
                        <img className='container-left_img' src={img || productDetail?.image01} />
                    </div>
                    <ListImageDetail listImg={listImg} setImg={setImg} />
                </div>
                <div className='container-detail__right'>
                    <div className='container-right__title'>
                        {productDetail?.title}
                    </div>
                    <div className='container-right__price'>
                        {productDetail?.price}
                    </div>

                    <div className='container-right__btn'>
                        <div className='btn-add__cart' onClick={() => handleClickAdd()}>
                            Thêm vào giỏ hàng
                        </div>
                        {/* <div className='btn-follow'>
                            <FavoriteBorderIcon />
                        </div> */}
                    </div>
                    <div className='container-right__des'>
                        <div className='btn-content title d-flex justify-space-between'>
                            <div style={{ marginRight: '150px' }}>
                                Mô tả
                            </div>
                            <div>
                                <KeyboardArrowDownIcon />
                            </div>
                        </div>
                        <div className='main-content'>
                            <div style={{ margin: '8px 0', textAlign: 'justify' }}> {productDetail?.desc}.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ fontSize: '25px', padding: '16px 0', borderBottom: '1px solid #ccc', fontWeight: '500', margin: '140px 16px 32px' }}>Sản phẩm nổi bật</div>
            <div className='product-suggest d-flex justify-space-between'>
                {products.slice(idx, idx + 4).map(item => {
                    return (<ProductBox id={item.id} title={item.title} des={item.desc.slice(0, 100)} img={item.image01} />)
                })}
            </div>
        </div>
    )
}

export default Detail;