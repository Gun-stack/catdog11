import { useEffect,useState } from 'react';

function PetReg() {


    return ( 
    <>
            <main className="cd-main dis-center">
        <section className="shop-main-section bg-white">
            <form action="" className="shop-form-container">
                <div className="input-img-click sm-input-img">
                    <p> 등록한 반려동물이 없습니다 <br/>
                        <a href="cl-petregform.html">반려동물 등록하기 <i className="fas fa-plus-circle"></i></a></p>
                </div>
            </form>

            <div class="stylelist-content">

                        <div className="st-profile-container">

                            <div className="st-profile-img">
                                <img src="/img/gallrey-img/textimg.png" alt="등록한 반려동물 사진" className="st-profile-img" />
                            </div>

                            <div className="st-profile-context">
                                <div className="st-profile-name">
                                    반려동물
                                </div>
                                <div className="st-profile-shop">
                                    반려동물 종류
                                </div>
                            </div>

                        </div>

                        <div className="st-button-container">
                            <a href="cl-petmodify.html"><button className="st-button">편집<i className="fas fa-pen btn-icon"></i></button></a>
                        </div>
                    </div>

                </section>



                </main>
            </> 
            );
        }

        export default PetReg;
