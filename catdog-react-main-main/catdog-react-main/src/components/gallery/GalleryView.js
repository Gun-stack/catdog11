import React from 'react';
import Footer from '../screens/Footer';
import Header from '../screens/Header';


function GalleryView() {







    return (
<div>   
    <div class="web-container">
        <div class="cd-container bg-white">
                <Header></Header>
                <section className="section-header">
                    <div className="section-header-container">
                        <span className="section-header-text">갤러리</span>
                    </div>
                </section>

                <main className="cd-main">

                <nav className="main-nav">
                    <ul className="main-nav-list">
                        <li className="main-nav-list-text"><a href="st-gallery.html">스타일리스트 갤러리</a></li>
                        <li className="main-nav-list-text"><a href="cl-gallery.html">회원 갤러리</a></li>
                    </ul>
                </nav>

                <section className="st-gallery-section">

                    {/* 이미지 게시판 요소  */}
                    <hr className="divide-line" />
                    <div className="st-gallery-view">
                        <div className="st-gallery-view-img">
                            <div className="view-gallery-profile-container magin-l-1">
                                <img src="./img/gallrey-img/textimg.png" alt="프로필 이미지" className="view-profile-img" />
                                <div className="view-img-nickname">튀김이랑달퐁이랑</div>
                            </div>

                            <div className="view-img-container">
                                <img src="/img/gallrey-img/textimg.png" alt="스타일리스트 사진" className="view-img" />
                            </div>
                            <div className="view-img-icons magin-l-1">
                                <span><i className="fa-regular fa-heart"></i>20</span>
                                <span><i className="fa-regular fa-comment"></i>1</span>

                                <div className="view-comment">
                                    <span className="view-comment-nickname">덧글 쓴사람 닉네임 :</span>
                                    <span className="view-comment-text">외않되</span>
                                </div>
                                <button className="view-comment-more">덧글 더보기</button>
                            </div>
                        </div>
                    </div>
                    <hr className="divide-line" />
                    {/* 이미지 게시판 요소 끝 */}

                    <div>
                        <button className="main-btn main-sm-btn btn-text">더보기</button>
                    </div>
                </section>

                </main>
                <Footer/>
                </div>
                </div>
        </div>
    );   
}

export default GalleryView;