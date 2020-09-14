import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

type IconStyleProps = {
  scale: number;
  fill: string;
};

export interface IconProps extends IconStyleProps {
  type: 'instagram' | 'facebook' | 'github' | 'phone' | 'email';
}

const ICON_TYPE = {
  instagram: "M15.0067 7.30838C10.7492 7.30838 7.31507 10.7425 7.31507 15C7.31507 19.2575 10.7492 22.6916 15.0067 22.6916C19.2642 22.6916 22.6983 19.2575 22.6983 15C22.6983 10.7425 19.2642 7.30838 15.0067 7.30838ZM15.0067 20.0006C12.2554 20.0006 10.0061 17.758 10.0061 15C10.0061 12.242 12.2487 9.99944 15.0067 9.99944C17.7647 9.99944 20.0073 12.242 20.0073 15C20.0073 17.758 17.758 20.0006 15.0067 20.0006ZM24.807 6.99375C24.807 7.99119 24.0037 8.7878 23.0129 8.7878C22.0155 8.7878 21.2189 7.98449 21.2189 6.99375C21.2189 6.00301 22.0222 5.19971 23.0129 5.19971C24.0037 5.19971 24.807 6.00301 24.807 6.99375ZM29.9013 8.81457C29.7875 6.41136 29.2385 4.28261 27.478 2.52873C25.7241 0.774852 23.5953 0.225929 21.1921 0.105433C18.7153 -0.0351445 11.2914 -0.0351445 8.81457 0.105433C6.41805 0.219235 4.2893 0.768158 2.52873 2.52203C0.768158 4.27591 0.225929 6.40466 0.105433 8.80788C-0.0351445 11.2847 -0.0351445 18.7086 0.105433 21.1854C0.219235 23.5886 0.768158 25.7174 2.52873 27.4713C4.2893 29.2251 6.41136 29.7741 8.81457 29.8946C11.2914 30.0351 18.7153 30.0351 21.1921 29.8946C23.5953 29.7808 25.7241 29.2318 27.478 27.4713C29.2318 25.7174 29.7808 23.5886 29.9013 21.1854C30.0418 18.7086 30.0418 11.2914 29.9013 8.81457ZM26.7014 23.843C26.1793 25.1551 25.1685 26.1659 23.8497 26.6947C21.8749 27.478 17.189 27.2972 15.0067 27.2972C12.8244 27.2972 8.13176 27.4713 6.16367 26.6947C4.85161 26.1726 3.84079 25.1618 3.31195 23.843C2.52873 21.8682 2.70947 17.1823 2.70947 15C2.70947 12.8177 2.53542 8.12507 3.31195 6.15698C3.8341 4.84492 4.84492 3.8341 6.16367 3.30525C8.13846 2.52203 12.8244 2.70278 15.0067 2.70278C17.189 2.70278 21.8816 2.52873 23.8497 3.30525C25.1618 3.8274 26.1726 4.83822 26.7014 6.15698C27.4847 8.13176 27.3039 12.8177 27.3039 15C27.3039 17.1823 27.4847 21.8749 26.7014 23.843Z",
  facebook: "M30.1826 15.0913C30.1826 6.75456 23.428 0 15.0913 0C6.75456 0 0 6.75456 0 15.0913C0 22.6235 5.51866 28.8669 12.7333 30V19.4538H8.89959V15.0913H12.7333V11.7663C12.7333 7.98438 14.9848 5.89533 18.4333 5.89533C20.0848 5.89533 21.8118 6.18986 21.8118 6.18986V9.90183H19.9083C18.0341 9.90183 17.4493 11.0653 17.4493 12.2586V15.0913H21.6347L20.9653 19.4538H17.4493V30C24.6639 28.8669 30.1826 22.6235 30.1826 15.0913Z",
  github: "M9.70742 23.2852C9.70742 23.4023 9.57284 23.4961 9.40315 23.4961C9.21006 23.5137 9.07548 23.4199 9.07548 23.2852C9.07548 23.168 9.21006 23.0742 9.37975 23.0742C9.55529 23.0566 9.70742 23.1504 9.70742 23.2852ZM7.88765 23.0215C7.84669 23.1387 7.96372 23.2734 8.13926 23.3086C8.29139 23.3672 8.46693 23.3086 8.50204 23.1914C8.53715 23.0742 8.42597 22.9395 8.25043 22.8867C8.0983 22.8457 7.92861 22.9043 7.88765 23.0215ZM10.474 22.9219C10.3043 22.9629 10.1872 23.0742 10.2048 23.209C10.2223 23.3262 10.3745 23.4023 10.55 23.3613C10.7197 23.3203 10.8367 23.209 10.8192 23.0918C10.8016 22.9805 10.6436 22.9043 10.474 22.9219ZM14.3242 0.46875C6.2083 0.46875 0 6.63867 0 14.7656C0 21.2637 4.08426 26.8242 9.91807 28.7812C10.667 28.916 10.9304 28.4531 10.9304 28.0723C10.9304 27.709 10.9128 25.7051 10.9128 24.4746C10.9128 24.4746 6.81685 25.3535 5.9567 22.7285C5.9567 22.7285 5.28964 21.0234 4.33001 20.584C4.33001 20.584 2.99005 19.6641 4.42364 19.6816C4.42364 19.6816 5.88063 19.7988 6.68227 21.1934C7.96372 23.4551 10.1112 22.8047 10.9479 22.418C11.0825 21.4805 11.4628 20.8301 11.8841 20.4434C8.61322 20.0801 5.31305 19.6055 5.31305 13.9687C5.31305 12.3574 5.75775 11.5488 6.69397 10.5176C6.54183 10.1367 6.04447 8.56641 6.8461 6.53906C8.06904 6.1582 10.8835 8.12109 10.8835 8.12109C12.0538 7.79297 13.3119 7.62305 14.5582 7.62305C15.8046 7.62305 17.0626 7.79297 18.2329 8.12109C18.2329 8.12109 21.0474 6.15234 22.2703 6.53906C23.072 8.57226 22.5746 10.1367 22.4225 10.5176C23.3587 11.5547 23.9321 12.3633 23.9321 13.9687C23.9321 19.623 20.4857 20.0742 17.2147 20.4434C17.7531 20.9062 18.2095 21.7852 18.2095 23.1621C18.2095 25.1367 18.1919 27.5801 18.1919 28.0605C18.1919 28.4414 18.4611 28.9043 19.2042 28.7695C25.0556 26.8242 29.0228 21.2637 29.0228 14.7656C29.0228 6.63867 22.44 0.46875 14.3242 0.46875ZM5.68753 20.6777C5.61146 20.7363 5.62902 20.8711 5.72849 20.9824C5.82211 21.0762 5.9567 21.1172 6.03276 21.041C6.10883 20.9824 6.09128 20.8477 5.9918 20.7363C5.89818 20.6426 5.7636 20.6016 5.68753 20.6777ZM5.05558 20.2031C5.01463 20.2793 5.07314 20.373 5.19017 20.4316C5.28379 20.4902 5.40082 20.4727 5.44177 20.3906C5.48273 20.3145 5.42422 20.2207 5.30719 20.1621C5.19017 20.127 5.09654 20.1445 5.05558 20.2031ZM6.95143 22.2891C6.85781 22.3652 6.89291 22.541 7.0275 22.6523C7.16208 22.7871 7.33177 22.8047 7.40784 22.7109C7.4839 22.6348 7.4488 22.459 7.33177 22.3477C7.20304 22.2129 7.0275 22.1953 6.95143 22.2891ZM6.28437 21.4277C6.19075 21.4863 6.19075 21.6387 6.28437 21.7734C6.37799 21.9082 6.53598 21.9668 6.61205 21.9082C6.70567 21.832 6.70567 21.6797 6.61205 21.5449C6.53013 21.4102 6.37799 21.3516 6.28437 21.4277Z",
  phone: "M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z",
  email: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
}

export const IconComponent = styled.svg<IconStyleProps>`
  display: flex;
  align-items: flex-end;
  width: 30px;
  height: 30px;
  fill: ${({fill}) => fill};
  transform: scale(${({scale}) => scale});
`;

const Icon: FunctionComponent<IconProps> = function ({ type, ...style }) {
  return (
    <IconComponent {...style}>
      <path d={ICON_TYPE[type]}/>
    </IconComponent>
  );
};

export default Icon;
