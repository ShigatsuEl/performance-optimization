import React from "react";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import btnClose from "../assets/btn-close.png";

const ImageModal = (props) => {
  const images = [
    {
      original:
        "https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-01.jpg?interpolation=lanczos-none&resize=*:800",
      thumbnail:
        "https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-01.jpg?interpolation=lanczos-none&resize=*:150",
    },
    {
      original:
        "https://stillmed.olympic.org/media/Photos/2016/08/12/12-08-2016-archery-individual-men-03.jpg?interpolation=lanczos-none&resize=*:800",
      thumbnail:
        "https://stillmed.olympic.org/media/Photos/2016/08/12/12-08-2016-archery-individual-men-03.jpg?interpolation=lanczos-none&resize=*:150",
    },
    {
      original:
        "https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-02.jpg?interpolation=lanczos-none&resize=*:800",
      thumbnail:
        "https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-02.jpg?interpolation=lanczos-none&resize=*:150",
    },
    {
      original:
        "https://stillmed.olympic.org/media/Photos/2016/08/20/part-2/20-08-2016-Golf-Women-02.jpg?interpolation=lanczos-none&resize=*:800",
      thumbnail:
        "https://stillmed.olympic.org/media/Photos/2016/08/20/part-2/20-08-2016-Golf-Women-02.jpg?interpolation=lanczos-none&resize=*:150",
    },
    {
      original:
        "https://stillmed.olympic.org/media/Photos/2016/08/14/part-1/14-08-2016-Golf-Individual-Stroke-Play-Men-05.jpg?interpolation=lanczos-none&resize=*:800",
      thumbnail:
        "https://stillmed.olympic.org/media/Photos/2016/08/14/part-1/14-08-2016-Golf-Individual-Stroke-Play-Men-05.jpg?interpolation=lanczos-none&resize=*:150",
    },
    {
      original:
        "https://stillmed.olympic.org/media/Photos/2016/08/12/12-08-2016-archery-individual-men-02.jpg?interpolation=lanczos-none&resize=*:800",
      thumbnail:
        "https://stillmed.olympic.org/media/Photos/2016/08/12/12-08-2016-archery-individual-men-02.jpg?interpolation=lanczos-none&resize=*:150",
    },
    {
      original:
        "https://stillmed.olympic.org/media/Photos/2016/08/12/12-08-2016-archery-individual-men-01.jpg?interpolation=lanczos-none&resize=*:800",
      thumbnail:
        "https://stillmed.olympic.org/media/Photos/2016/08/12/12-08-2016-archery-individual-men-01.jpg?interpolation=lanczos-none&resize=*:150",
    },
    {
      original:
        "https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-03.jpg?interpolation=lanczos-none&resize=*:800",
      thumbnail:
        "https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-03.jpg?interpolation=lanczos-none&resize=*:150",
    },
  ];

  /**
   * 브라우저는 초당 60 프레임으로 애니메이션을 보여준다.
   * 하지만 어떠한 이유로 인해 초당 60 프레임보다 아래 ex)20 fps 으로 현저히 내려간다면 애니메이션이 끊기는 것처럼 보일 수 있다.
   * 이것을 쟁크현상이라고 부르며 쟁크현상이 나타나는 이유는 여러가지가 있지만 한가지 이유를 들어 보자면
   * Critical Rendering Path 또는 Pixel Pipeline을 다시 진행하면서 빠른 시간 내에 Painting을 해야하기 때문에 버벅이는 현상이 발생하게 되는 것이다.
   */

  /**
   * width, height(위치나 크기)가 변경되면 DOM + CSSOM을 결합해 Render Tree를 만들어 Layout을 배치하고 브라우저에 Paint 하여 Composite하는 과정이
   * 재실행 되는 것을 Reflow라고 한다.
   * color, backgroundColor(색깔)이 변경되면 Layout 단계가 생략되며 Paint만 다시하는 과정을 Repaint라고 한다.
   * transform, opacity(GPU가 관여할 수 있는 속성)이 변경되면 Layout & Paint 단계가 생략된다.
   */

  return (
    <ImageModalWrapper>
      <ImageModalContainer>
        <BtnClose src={btnClose} onClick={props.closeModal} />
        <ModalHeader>올림픽 사진</ModalHeader>
        <Modalbody>
          <ImageGallery items={images} />
        </Modalbody>
      </ImageModalContainer>
    </ImageModalWrapper>
  );
};

const ImageModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 200;
`;
const ImageModalContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin: auto;
  overflow: auto;
  background: #fff;
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;
`;
const BtnClose = styled.img`
  cursor: pointer;
  position: absolute;
  z-index: 250;
  width: 25px;
  top: 18px;
  right: 15px;
`;
const ModalHeader = styled.div`
  width: 100%;
  padding: 20px 10px;
  border-bottom: 1px solid #dddddd;
  color: #333;
  font-size: 1.05em;
  font-weight: 500;
  box-sizing: border-box;
`;
const Modalbody = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

export default ImageModal;
