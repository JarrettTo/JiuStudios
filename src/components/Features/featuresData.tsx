import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.03429 5.96305L6.49114 8.49856C6.02369 8.9646 5.59488 9.3921 5.25624 9.77856C5.03877 10.0267 4.82145 10.2984 4.63737 10.5985L4.61259 10.5738C4.56555 10.5269 4.54201 10.5034 4.51839 10.4805C4.07636 10.0516 3.55641 9.71062 2.98636 9.47575C2.9559 9.4632 2.92498 9.45095 2.86314 9.42645L2.48449 9.27641C1.97153 9.07315 1.83482 8.41279 2.22514 8.02365C3.34535 6.90684 4.69032 5.56594 5.33941 5.29662C5.91185 5.05911 6.53023 4.98008 7.12664 5.06822C7.67311 5.14898 8.19006 5.42968 9.03429 5.96305Z"
          fill="white"
        />
        <path
          d="M13.3767 19.3132C13.5816 19.5212 13.7177 19.6681 13.8408 19.8251C14.0031 20.0322 14.1483 20.2523 14.2748 20.4829C14.4172 20.7426 14.5278 21.02 14.749 21.5748C14.929 22.0265 15.5272 22.1459 15.8746 21.7995L15.9586 21.7157C17.0788 20.5988 18.4237 19.2579 18.6938 18.6108C18.9321 18.04 19.0113 17.4235 18.9229 16.8289C18.8419 16.2841 18.5605 15.7688 18.0256 14.9273L15.474 17.4713C14.9959 17.9479 14.5576 18.385 14.1612 18.7273C13.9236 18.9325 13.6637 19.1376 13.3767 19.3132Z"
          fill="white"
        />
        <path
          d="M14.4467 16.3769L20.2935 10.5476C21.1356 9.70811 21.5566 9.28836 21.7783 8.75458C22.0001 8.22081 22.0001 7.62719 22.0001 6.43996V5.87277C22.0001 4.04713 22.0001 3.13431 21.4312 2.56715C20.8624 2 19.9468 2 18.1157 2H17.5468C16.356 2 15.7606 2 15.2252 2.2211C14.6898 2.4422 14.2688 2.86195 13.4268 3.70146L7.57991 9.53078C6.59599 10.5117 5.98591 11.12 5.74966 11.7075C5.67502 11.8931 5.6377 12.0767 5.6377 12.2692C5.6377 13.0713 6.2851 13.7168 7.57991 15.0077L7.75393 15.1812L9.79245 13.1123C10.0832 12.8172 10.558 12.8137 10.8531 13.1044C11.1481 13.3951 11.1516 13.87 10.8609 14.1651L8.8162 16.2403L8.95326 16.3769C10.2481 17.6679 10.8955 18.3133 11.7 18.3133C11.8777 18.3133 12.0478 18.2818 12.2189 18.2188C12.8222 17.9966 13.438 17.3826 14.4467 16.3769ZM17.1935 9.5312C16.435 10.2874 15.2053 10.2874 14.4468 9.5312C13.6883 8.775 13.6883 7.54895 14.4468 6.79274C15.2053 6.03653 16.435 6.03653 17.1935 6.79274C17.952 7.54895 17.952 8.775 17.1935 9.5312Z"
          fill="white"
        />
      </svg>
    ),
    title: "Web Development",
    paragraph: "We excel in creating bespoke full-stack web solutions that are functional, secure, and visually appealing. Our expertise maximizes modern frameworks like Next.js, React.js, Node.js, NestJS, and Angular, ensuring dynamic, responsive, and secure websites tailored to your needs and business requirements.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 2,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.18109 10.1811C9.2342 10.128 9.32905 10.0623 9.63166 10.0216C9.95434 9.97823 10.3923 9.97675 11.0698 9.97675H12.9302C13.6077 9.97675 14.0457 9.97823 14.3683 10.0216C14.671 10.0623 14.7658 10.128 14.8189 10.1811C14.872 10.2342 14.9377 10.329 14.9784 10.6317C15.0218 10.9543 15.0233 11.3923 15.0233 12.0698V13.9302C15.0233 14.6077 15.0218 15.0457 14.9784 15.3683C14.9377 15.671 14.872 15.7658 14.8189 15.8189C14.7658 15.872 14.671 15.9377 14.3683 15.9784C14.0457 16.0218 13.6077 16.0233 12.9302 16.0233H11.0698C10.3923 16.0233 9.95434 16.0218 9.63166 15.9784C9.32905 15.9377 9.2342 15.872 9.18109 15.8189C9.12798 15.7658 9.0623 15.671 9.02161 15.3683C8.97823 15.0457 8.97675 14.6077 8.97675 13.9302V12.0698C8.97675 11.3923 8.97823 10.9543 9.02161 10.6317C9.0623 10.329 9.12798 10.2342 9.18109 10.1811Z"
          fill="white"
        />
        <path
          d="M12 3C12.3853 3 12.6977 3.31236 12.6977 3.69767V6.48884C13.2084 6.48991 13.6717 6.49342 14.0932 6.50495L14.093 6.48837V3.69767C14.093 3.31236 14.4054 3 14.7907 3C15.176 3 15.4884 3.31236 15.4884 3.69767V6.48837C15.4884 6.52487 15.4856 6.56072 15.4802 6.5957C16.4162 6.71067 17.0648 6.94879 17.558 7.44198C18.0512 7.93517 18.2893 8.58381 18.4043 9.51984C18.4393 9.51443 18.4751 9.51163 18.5116 9.51163H21.3023C21.6876 9.51163 22 9.82399 22 10.2093C22 10.5946 21.6876 10.907 21.3023 10.907H18.5116L18.495 10.9068C18.5066 11.3283 18.5106 11.7916 18.5116 12.3023H21.3023C21.6876 12.3023 22 12.6147 22 13C22 13.3853 21.6876 13.6977 21.3023 13.6977L18.5112 13.6977C18.5101 14.2084 18.5066 14.6717 18.495 15.0932L18.5116 15.093H21.3023C21.6876 15.093 22 15.4054 22 15.7907C22 16.176 21.6876 16.4884 21.3023 16.4884H18.5116C18.4751 16.4884 18.4393 16.4856 18.4043 16.4802C18.2893 17.4162 18.0512 18.0648 17.558 18.558C17.0648 19.0512 16.4162 19.2893 15.4802 19.4043C15.4856 19.4393 15.4884 19.4751 15.4884 19.5116V22.3023C15.4884 22.6876 15.176 23 14.7907 23C14.4054 23 14.093 22.6876 14.093 22.3023V19.5116L14.0932 19.495C13.6717 19.5066 13.2084 19.5106 12.6977 19.5116V22.3023C12.6977 22.6876 12.3853 23 12 23C11.6147 23 11.3023 22.6876 11.3023 22.3023L11.3023 19.5112C10.7916 19.5101 10.3283 19.5066 9.90678 19.495L9.90698 19.5116V22.3023C9.90698 22.6876 9.59462 23 9.2093 23C8.82399 23 8.51163 22.6876 8.51163 22.3023V19.5116C8.51163 19.4751 8.51443 19.4393 8.51984 19.4043C7.58381 19.2893 6.93517 19.0512 6.44198 18.558C5.94879 18.0648 5.71067 17.4162 5.5957 16.4802C5.56071 16.4856 5.52487 16.4884 5.48837 16.4884H2.69767C2.31236 16.4884 2 16.176 2 15.7907C2 15.4054 2.31236 15.093 2.69767 15.093H5.48837L5.50495 15.0932C5.49342 14.6717 5.48944 14.2084 5.48837 13.6977H2.69767C2.31236 13.6977 2 13.3853 2 13C2 12.6147 2.31236 12.3023 2.69767 12.3023L5.48884 12.3023C5.48991 11.7916 5.49342 11.3283 5.50495 10.9068L5.48837 10.907H2.69767C2.31236 10.907 2 10.5946 2 10.2093C2 9.82399 2.31236 9.51163 2.69767 9.51163H5.48837C5.52487 9.51163 5.56071 9.51443 5.5957 9.51984C5.71067 8.58381 5.94879 7.93517 6.44198 7.44198C6.93517 6.94879 7.58381 6.71067 8.51984 6.5957C8.51443 6.56072 8.51163 6.52487 8.51163 6.48837V3.69767C8.51163 3.31236 8.82399 3 9.2093 3C9.59462 3 9.90698 3.31236 9.90698 3.69767V6.48837L9.90678 6.50495C10.3283 6.49342 10.7916 6.48944 11.3023 6.48837V3.69767C11.3023 3.31236 11.6147 3 12 3ZM11.0238 8.5814C10.4054 8.58136 9.87247 8.58133 9.44573 8.63871C8.98839 8.70019 8.55001 8.83885 8.19443 9.19443C7.83885 9.55001 7.70019 9.98839 7.63871 10.4457C7.58133 10.8725 7.58136 11.4054 7.5814 12.0238V13.9762C7.58136 14.5946 7.58133 15.1275 7.63871 15.5543C7.70019 16.0116 7.83885 16.45 8.19443 16.8056C8.55001 17.1612 8.98839 17.2998 9.44573 17.3613C9.87247 17.4187 10.4054 17.4186 11.0238 17.4186H12.9762C13.5946 17.4186 14.1275 17.4187 14.5543 17.3613C15.0116 17.2998 15.45 17.1612 15.8056 16.8056C16.1612 16.45 16.2998 16.0116 16.3613 15.5543C16.4187 15.1275 16.4186 14.5946 16.4186 13.9762V12.0238C16.4186 11.4054 16.4187 10.8725 16.3613 10.4457C16.2998 9.98839 16.1612 9.55001 15.8056 9.19443C15.45 8.83885 15.0116 8.70019 14.5543 8.63871C14.1275 8.58133 13.5947 8.58136 12.9762 8.5814H11.0238Z"
          fill="white"
        />
      </svg>
    ),
    title: "AI & Machine Learning",
    paragraph: "At Jiu Studios, we harness the power of AI and ML to develop intelligent solutions that drive innovation. From predictive analytics to natural language processing, our AI/ML capabilities enhance decision-making and operational efficiency. Elevate your business with cutting-edge AI models.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 3,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 13.75C20 13.3358 19.6642 13 19.25 13H16.25C15.8358 13 15.5 13.3358 15.5 13.75V20.5H14V4.25C14 3.52169 13.9984 3.05091 13.9518 2.70403C13.908 2.37872 13.8374 2.27676 13.7803 2.21967C13.7232 2.16258 13.6213 2.09197 13.296 2.04823C12.9491 2.00159 12.4783 2 11.75 2C11.0217 2 10.5509 2.00159 10.204 2.04823C9.87872 2.09197 9.77676 2.16258 9.71967 2.21967C9.66258 2.27676 9.59196 2.37872 9.54823 2.70403C9.50159 3.05091 9.5 3.52169 9.5 4.25V20.5H8V8.75C8 8.33579 7.66421 8 7.25 8H4.25C3.83579 8 3.5 8.33579 3.5 8.75V20.5H2H1.75C1.33579 20.5 1 20.8358 1 21.25C1 21.6642 1.33579 22 1.75 22H21.75C22.1642 22 22.5 21.6642 22.5 21.25C22.5 20.8358 22.1642 20.5 21.75 20.5H21.5H20V13.75Z"
          fill="white"
        />
      </svg>
    ),
    title: "Blockchain, NFT & Cryptocurrency",
    paragraph: "We offer blockchain development, creating decentralized applications and smart contracts using Solidity, Ethereum, and other leading technologies. Whether it's to launch an innovating WEB3 project or enhance security and transparency in your operations with blockchain solutions, we got you covered.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 4,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.0516 2H11.9484C10.2682 1.99999 8.93732 1.99997 7.89575 2.14245C6.82382 2.28908 5.95621 2.59803 5.27199 3.29418C4.58778 3.99033 4.28413 4.87308 4.14001 5.9637C3.99997 7.02343 3.99999 8.37751 4 10.087V13.9129C3.99999 15.6225 3.99997 16.9766 4.14001 18.0363C4.28413 19.1269 4.58778 20.0097 5.27199 20.7058C5.95621 21.402 6.82382 21.7109 7.89575 21.8575C8.93731 22 10.2682 22 11.9484 22H12.0516C13.7318 22 15.0627 22 16.1043 21.8575C17.1762 21.7109 18.0438 21.402 18.728 20.7058C19.4122 20.0097 19.7159 19.1269 19.86 18.0363C20 16.9766 20 15.6225 20 13.913V10.0871C20 8.37754 20 7.02343 19.86 5.9637C19.7159 4.87308 19.4122 3.99033 18.728 3.29418C18.0438 2.59803 17.1762 2.28908 16.1043 2.14245C15.0627 1.99997 13.7318 1.99999 12.0516 2ZM8.57143 18.5116C8.57143 18.1263 8.87843 17.814 9.25714 17.814H14.7429C15.1216 17.814 15.4286 18.1263 15.4286 18.5116C15.4286 18.8969 15.1216 19.2093 14.7429 19.2093H9.25714C8.87843 19.2093 8.57143 18.8969 8.57143 18.5116Z"
          fill="white"
        />
      </svg>
    ),
    title: "Mobile Development",
    paragraph: "We offer extensive full-stack mobile app development, crafting solutions for Android and iOS using Kotlin and Flutter. We also make use of tools like Firebase for analysis and storage. Our apps are user-friendly, performant, and built to solve your user and business problems.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 5,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 20.24C1 19.8203 1.3436 19.48 1.76744 19.48H22.2326C22.6564 19.48 23 19.8203 23 20.24C23 20.6597 22.6564 21 22.2326 21H1.76744C1.3436 21 1 20.6597 1 20.24Z"
          fill="white"
        />
        <path
          d="M3.68981 3.8904C2.7907 4.78079 2.7907 6.21386 2.7907 9.08V14.1467C2.7907 16.0574 2.7907 17.0128 3.39011 17.6064C3.98952 18.2 4.95425 18.2 6.88372 18.2H17.1163C19.0457 18.2 20.0105 18.2 20.6099 17.6064C21.2093 17.0128 21.2093 16.0574 21.2093 14.1467V9.08C21.2093 6.21386 21.2093 4.78079 20.3102 3.8904C19.4111 3 17.964 3 15.0698 3H8.93023C6.03603 3 4.58893 3 3.68981 3.8904ZM8.16279 15.16C8.16279 14.7403 8.50639 14.4 8.93023 14.4H15.0698C15.4936 14.4 15.8372 14.7403 15.8372 15.16C15.8372 15.5797 15.4936 15.92 15.0698 15.92H8.93023C8.50639 15.92 8.16279 15.5797 8.16279 15.16Z"
          fill="white"
        />
      </svg>
    ),
    title: "Desktop Application Development",
    paragraph: "We deliver top-tier desktop application development, leveraging technologies like Electron and .NET to create seamless, robust, and intuitive applications for all major operating systems that satisfy your user or business requirements.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 6,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.75 2C2.75 1.58579 2.41421 1.25 2 1.25C1.58579 1.25 1.25 1.58579 1.25 2V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H12C9.62178 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12V2Z"
          fill="white"
        />
        <path
          d="M19.5875 7.46641C19.8451 7.14204 19.791 6.67026 19.4666 6.41267C19.1422 6.15508 18.6704 6.20921 18.4128 6.53359L15.2948 10.46C15.0496 10.7688 14.8887 10.9708 14.7561 11.1162C14.6265 11.2585 14.5657 11.2989 14.538 11.3137C14.3272 11.4264 14.0754 11.4319 13.8599 11.3285C13.8316 11.3149 13.7691 11.2772 13.6333 11.1407C13.4946 11.0011 13.3251 10.8063 13.0666 10.5085L13.0505 10.4899C12.8126 10.2157 12.6098 9.98188 12.4308 9.80184C12.2448 9.6147 12.0414 9.4401 11.7894 9.31918C11.143 9.00898 10.3875 9.02541 9.75518 9.36342C9.50872 9.49518 9.31307 9.67845 9.13536 9.87351C8.96441 10.0612 8.77192 10.3036 8.54619 10.5878L5.41267 14.5336C5.15508 14.8579 5.20921 15.3297 5.53358 15.5873C5.85795 15.8449 6.32973 15.7908 6.58733 15.4664L9.70551 11.54C9.95077 11.2311 10.1116 11.0292 10.2442 10.8837C10.3738 10.7414 10.4347 10.7011 10.4623 10.6863C10.6731 10.5736 10.925 10.5681 11.1404 10.6715C11.1687 10.6851 11.2313 10.7228 11.367 10.8593C11.5057 10.9989 11.6752 11.1936 11.9337 11.4915L11.9498 11.5101C12.1877 11.7843 12.3906 12.0181 12.5695 12.1981C12.7555 12.3853 12.9589 12.5599 13.2109 12.6808C13.8573 12.991 14.6129 12.9746 15.2452 12.6365C15.4916 12.5048 15.6873 12.3215 15.865 12.1264C16.0359 11.9388 16.2284 11.6964 16.4541 11.4122L19.5875 7.46641Z"
          fill="white"
        />
      </svg>
    ),
    title: "Ecommerce Development",
    paragraph: "We offer expert eCommerce development services, designing intuitive custom online stores with seamless shopping experiences using platforms like Shopify and WooCommerce. Scale and boost your sales and manage your online business effortlessly with our tailored solutions.",
    btn: "Learn More",
    btnLink: "/#",
  },
];
export default featuresData;
