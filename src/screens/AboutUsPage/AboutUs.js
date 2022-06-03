import React from "react";
import style from "./AboutUs.module.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../components/layout";


export default function AccessoryDetail() {
  return (
    <Layout>
      <div className={`${style.main}`}>
        <div className={`${style.headingWrapper} row`}>
          <div className={`${style.headingText} col-xl-6 col-12 row`}>
            <h1 className={`${style.heading} col-xl-8 col-8`}>
              Câu chuyện về sự thành lập của thế giới xe hơi - Seven
            </h1>
          </div>
          <div className={`${style.headingImg} col-xl-6 col-12 row`}>
            <div className={`${style.img} col-xl-10 col-12`}></div>
          </div>
        </div>
        <div className={`${style.storyWrapper} row`}>
          <div className={`${style.storyText} col-xl-8 col-10`}>
            Seven - bắt nguồn từ nhóm thành viên bảy người cùng chung một niềm
            đam mê về xe, đặc biệt là dòng xe hơi cao cấp. Bắt nguồn từ việc
            nhận thấy dòng xe này hiện nay đang khá hiếm ở Việt Nam, nhưng như
            cầu sở hữu một chiếc xe hạng sang lại khá cao đối với những người
            giàu có, chúng tôi nhận thấy đây là một thì trường tiềm năng để phát
            triển. Sau thời gian phát triển khoảng 5 năm dưới hình thức sang
            tay, chúng tôi đã mở rộng quy mô và phát triển trở thành một công ty
            lớn mạnh, mục đích chiếm lĩnh thị trường xe hơi cao cấp tại Việt
            Nam. Chúng tôi mang trong mình sự nhiệt huyết của người trẻ, cùng
            với niềm đam mê bất tận dành cho xe hơi. Ở đây chúng tôi tìm kiếm
            những người có cùng đam mê, cùng họ hiện thực nó với những chiếc xe
            đầy cá tính. Thấu hiểu được những khó khăn khi theo đuổi đam mê,
            chúng tôi cũng sẵng sàng hỗ trợ tất cả về chi phí mua xe, bảo hành
            vào bảo trì cho những sản phẩm của chúng tôi, đó là sự tận tâm.
            Seven luôn hướng đến những giá trị đích thực, thể hiện cá tính của
            người sở hữu xe thông qua chiếc xe của họ.
          </div>
        </div>
        <div className={`${style.activityWrapper} row`}>
          <div className={`${style.activityHeading} col-xl-12 col-12`}>
            Hoạt động của Seven
          </div>
          <div className={`${style.activityImg} col-xl-12 col-12 row`}>
            <div className={`${style.Img1} col-xl-3 col-10`}></div>
            <div className={`${style.Img2} col-xl-3 col-10`}></div>
            <div className={`${style.Img3} col-xl-3 col-10`}></div>
          </div>
          <div className={`${style.activityDetail} col-xl-12 row`}>
            <div className={`${style.activityText} col-xl-8 col-10`}>
              Đến với Seven, bạn sẽ được trực tiếp trải nghiệm những chiếc siêu
              xe và cảm nhận sự hoàn mỹ của nó. Chúng tôi cung cấp cho bạn những
              chiếc xe phù hợp với cá tính, tôn lên nét thanh lịch, sang trọng
              của chủ sở hữu. Hơn hết, chúng tôi sẵng sàng tùy biến chiếc xe
              theo nhu cầu của khách hàng để mang đến sự riêng biệt về cá tính
              trên mỗi chiếc xe.
            </div>
          </div>
        </div>
        <div className={`${style.videoWrapper} row`}>
          <iframe
            className={`${style.video} col-xl-8`}
            src="https://www.youtube.com/embed/Y4DLlC3clPU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className={`${style.evolutionRow} row`}>
          <div className={`${style.currentText} col-xl-4 col-10`}>
            Seven - Hiện tại, chúng tôi đang cung cấp các dòng xe từ phân khúc
            thấp đến cao, đầy đủ lựa chọn cho khách hàng. Bên cạnh đó, các phụ
            kiện đi kèm cùng là một thứ mà chúng tôi quan tâm. Chúng tôi cung
            cấp đầy đủ phụ kiện cho các dòng xe hiện có để phụ vụ bảo trì cũng
            nhưng thay đổi theo nhu cầu của khách hàng.
          </div>
          <div className={`${style.futureText} col-xl-4 col-10`}>
            Seven - Tương lai, chúng tôi sẽ mở rộng quy mô ra khắp Đông Nam Á.
            Với kinh tế ngày càng phát triển, nhu cầu dùng xe hơi ngày càng tăng
            ở thị trường này. Đó là lý do chúng tôi sẽ mở rộng để phục vụ tốt
            hơn, đáp ứng được nhiều nhu cầu hơn và tạo nên một nét đăng trưng về
            xe hơi ở khu vực này.
          </div>
        </div>
      </div>
    </Layout>
  );
}
