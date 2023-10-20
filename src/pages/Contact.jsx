import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-header">
                <h2 className="contact-title">Liên hệ chúng tôi</h2>
                <div className="contact-description">
                Văn Phòng TUTIFOOD
                </div>
                <div className="contact-description">
                828 Sư Vạn Hạnh, phường 13, quận 10, Tp. Hồ Chí Minh
                </div>
                <div className="contact-btn">
                    <div className="btn d-flex align-center"><MailOutlineIcon className='c-red' style={{padding: '0 4px'}}/><div>Gui email</div></div>
                    <div className="btn d-flex align-center"><PhoneIcon className='c-red' style={{padding: '0 4px'}}/><div>84-28 12345678</div></div>
                </div>
            </div>
            <div className="contact-body">
                <div style={{ padding: '32px 16px' }}>
                    <div className="heading">Liên hệ TUTIFOOD Việt Nam</div>
                    <div className="line"></div>
                    <div className="d-flex justify-space-between">
                        <div className="w-50 m-8">
                            <input className="input" placeholder="Họ và tên của bạn" />
                        </div>
                        <div className="w-50 m-8">
                            <input className="input" placeholder="Địa chỉ Email của bạn" />
                        </div>
                    </div>
                    <div className="m-8" style={{width:'101.65%'}}>
                        <input className="input" placeholder="Số điện thoại" />
                    </div>
                    <div className="heading2">Địa chỉ của bạn</div>
                    <div className="d-flex justify-space-between">
                        <div className="w-50 m-8">
                            <input className="input" placeholder="Tỉnh/Thành phố" />
                        </div>
                        <div className="w-50 m-8">
                            <input className="input" placeholder="Quận/Huyện" />
                        </div>
                    </div>
                    <div className="d-flex justify-space-between">
                        <div className="w-50 m-8">
                            <input className="input" placeholder="Phường/Xã" />
                        </div>
                        <div className="w-50 m-8">
                            <input className="input" placeholder="Địa chỉ (Số nhà- Tên đường)" />
                        </div>
                    </div>
                    <div className="heading2">Nội dung bạn muốn liên hệ</div>
                    <textarea style={{width: '97%'}} className="input" name="message" rows="5" placeholder="Nhập nội dung..."></textarea>

                </div>
                <div  className="d-flex justify-center">
                    <div className="btn-send">Gửi đi</div>
                </div>
            </div>
        </div>
    )
}

export default Contact;