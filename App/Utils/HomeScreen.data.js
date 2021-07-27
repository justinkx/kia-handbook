const vrImageGenerator = (code, start, end) => {
  const imageIds = Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
  return imageIds.map((item) => ({
    uri: `https://www.kia.com/content/dam/kia2/in/en/images/360vr/${code}${
      item < 10 ? `0${item}` : item
    }-d.png`,
  }));
};

export const HomeScreenData = [
  {
    name: "Seltos",
    description: "Trend Leading Innovator",
    images: [
      "https://www.kia.com/content/dam/kia2/in/en/images/360vr/seltos/tiw5k4g1uhh132/exterior/a6r/53-d.png",
      "https://www.kia.com/content/dam/kia2/in/en/images/360vr/seltos/tiw5k4g1uhh132/exterior/a6r/72-d.png",
      "https://www.kia.com/content/dam/kia2/in/en/images/360vr/seltos/tiw5k4g1uhh132/exterior/a6r/17-d.png",
      "https://www.kia.com/content/dam/kia2/in/en/images/360vr/seltos/tiw5k4g1uhh132/exterior/a6r/35-d.png",
    ],
    header: {
      bannerVideo:
        "https://www.kia.com/content/dam/kia2/in/en/images/our-vehicles/seltos/showroom/Seltos-banner-video-Mobile.mp4",
      bannerImage: null,
      videoPoster:
        "https://www.kia.com/content/dam/kia2/in/en/images/our-vehicles/seltos/showroom/Seltos-showroom-banner-desktop.jpg",
      headerLogo:
        "https://www.kia.com/content/dam/kia2/in/en/images/our-vehicles/seltos/showroom/seltos_unit.png",
    },
    design: {
      gtLine: true,
      GT: {
        name: "SELTOS GT Line",
        exteriorId: "tiw5k4g1uhh132",
        colors: [
          {
            paint: "Intense Red",
            color: "#b20220",
            images: vrImageGenerator(
              "seltos/tiw5k4g1uhh132/exterior/a6r/",
              1,
              72
            ),
          },
          {
            paint: "Glacier White Pearl",
            color: "#f3f9fc",
            images: vrImageGenerator(
              "seltos/tiw5k4g1uhh132/exterior/gwp/",
              1,
              72
            ),
          },
          {
            paint: "Steel Silver",
            color: "#aeadad",
            images: vrImageGenerator(
              "seltos/tiw5k4g1uhh132/exterior/klg/",
              1,
              72
            ),
          },
          {
            paint: "Gravity Grey",
            color: "#34373a",
            images: vrImageGenerator(
              "seltos/tiw5k4g1uhh132/exterior/kdg/",
              1,
              72
            ),
          },
          {
            paint: "Aurora Black Pearl",
            color: "#161719",
            images: vrImageGenerator(
              "seltos/tiw5k4g1uhh132/exterior/abp/",
              1,
              72
            ),
          },
          {
            paint: "Intelligency Blue",
            color: "#0b21b3",
            images: vrImageGenerator(
              "seltos/tiw5k4g1uhh132/exterior/bnb/",
              1,
              72
            ),
          },
          {
            paint: "Punchy Orange",
            color: "#f05204",
            images: vrImageGenerator(
              "seltos/tiw5k4g1uhh132/exterior/a7a/",
              1,
              72
            ),
          },
          {
            paint: "White Pearl + Black",
            dualTone: true,
            colors: ["#f4fafa", "#131819"],
            images: vrImageGenerator(
              "seltos/tiw5k4g1uhh132/exterior/gb2/",
              1,
              72
            ),
          },
          {
            paint: "Orange + White",
            dualTone: true,
            colors: ["#db5e26", "#f5f9fc"],
            images: vrImageGenerator(
              "seltos/tiw5k4g1uhh132/exterior/gb5/",
              1,
              72
            ),
          },
          {
            paint: "White Pearl + Orange",
            dualTone: true,
            colors: ["#f6fafd", "#f05204"],
            images: vrImageGenerator(
              "seltos/tiw5k4g1uhh132/exterior/gb7/",
              1,
              72
            ),
          },
          {
            paint: "Red + Black",
            dualTone: true,
            colors: ["#b20220", "#161719"],
            images: vrImageGenerator(
              "seltos/tiw5k4g1uhh132/exterior/gb3/",
              1,
              72
            ),
          },
          {
            paint: "Red + Black",
            dualTone: true,
            colors: ["#adadad", "#db5e26"],
            images: vrImageGenerator(
              "seltos/tiw5k4g1uhh132/exterior/gb8/",
              1,
              72
            ),
          },
        ],
      },
      Tech: {
        name: "SELTOS Tech Line",
        exteriorId: "tiw51mc57pp00d",
        colors: [
          {
            paint: "Intense Red",
            color: "#b20220",
            images: vrImageGenerator(
              "seltos/tiw51mc57pp00d/exterior/a6r/",
              1,
              72
            ),
          },
          {
            paint: "Glacier White Pearl",
            color: "#f3f9fc",
            images: vrImageGenerator(
              "seltos/tiw51mc57pp00d/exterior/gwp/",
              1,
              72
            ),
          },
          {
            paint: "Steel Silver",
            color: "#aeadad",
            images: vrImageGenerator(
              "seltos/tiw51mc57pp00d/exterior/klg/",
              1,
              72
            ),
          },
          {
            paint: "Gravity Grey",
            color: "#34373a",
            images: vrImageGenerator(
              "seltos/tiw51mc57pp00d/exterior/kdg/",
              1,
              72
            ),
          },
          {
            paint: "Aurora Black Pearl",
            color: "#161719",
            images: vrImageGenerator(
              "seltos/tiw51mc57pp00d/exterior/abp/",
              1,
              72
            ),
          },
          {
            paint: "Intelligency Blue",
            color: "#0b21b3",
            images: vrImageGenerator(
              "seltos/tiw51mc57pp00d/exterior/bnb/",
              1,
              72
            ),
          },
          {
            paint: "Punchy Orange",
            color: "#f05204",
            images: vrImageGenerator(
              "seltos/tiw51mc57pp00d/exterior/a7a/",
              1,
              72
            ),
          },
          {
            paint: "White Pearl + Black",
            dualTone: true,
            colors: ["#f4fafa", "#131819"],
            images: vrImageGenerator(
              "seltos/tiw51mc57pp00d/exterior/gb2/",
              1,
              72
            ),
          },
          {
            paint: "Orange + White",
            dualTone: true,
            colors: ["#db5e26", "#f5f9fc"],
            images: vrImageGenerator(
              "seltos/tiw51mc57pp00d/exterior/gb5/",
              1,
              72
            ),
          },
          {
            paint: "White Pearl + Orange",
            dualTone: true,
            colors: ["#f6fafd", "#f05204"],
            images: vrImageGenerator(
              "seltos/tiw51mc57pp00d/exterior/gb7/",
              1,
              72
            ),
          },
          {
            paint: "Red + Black",
            dualTone: true,
            colors: ["#b20220", "#161719"],
            images: vrImageGenerator(
              "seltos/tiw51mc57pp00d/exterior/gb3/",
              1,
              72
            ),
          },
          {
            paint: "Red + Black",
            dualTone: true,
            colors: ["#adadad", "#db5e26"],
            images: vrImageGenerator(
              "seltos/tiw51mc57pp00d/exterior/gb8/",
              1,
              72
            ),
          },
        ],
      },
    },
  },
  {
    name: "Sonet",
    description: "Thrilling Performance",
    images: [
      "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1uhh00c/exterior/a6r/55-d.png",
      "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1uhh00c/exterior/a6r/01-d.png",
      "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1uhh00c/exterior/a6r/17-d.png",
      "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1uhh00c/exterior/a6r/36-d.png",
    ],
    header: {
      bannerVideo: null,
      bannerImage: null,
      videoPoster:
        "https://www.kia.com/content/dam/kia2/in/en/images/our-vehicles/sonet/showroom/Banner_sonet_1920x1080.jpg",
      headerLogo: null,
    },
    design: {
      gtLine: true,
      GT: {
        name: "SONET GT Line",
        exteriorId: "sxw5k2g1uhh00c",
        colors: [
          {
            paint: "Intense Red",
            color: "#b20220",
            images: vrImageGenerator(
              "sonet/sxw5k2g1uhh00c/exterior/a6r/",
              1,
              72
            ),
          },
          {
            paint: "Steel Silver",
            color: "#aeadad",
            images: vrImageGenerator(
              "sonet/sxw5k2g1uhh00c/exterior/klg/",
              1,
              72
            ),
          },
          {
            paint: "Gravity Grey",
            color: "#34373a",
            images: vrImageGenerator(
              "sonet/sxw5k2g1uhh00c/exterior/kdg/",
              1,
              72
            ),
          },
          {
            paint: "Aurora Black Pearl",
            color: "#161719",
            images: vrImageGenerator(
              "sonet/sxw5k2g1uhh00c/exterior/abp/",
              1,
              72
            ),
          },
          {
            paint: "Intelligency Blue",
            color: "#0b21b3",
            images: vrImageGenerator(
              "sonet/sxw5k2g1uhh00c/exterior/bnb/",
              1,
              72
            ),
          },
          {
            paint: "Beige Gold",
            color: "#aba186",
            images: vrImageGenerator(
              "sonet/sxw5k2g1uhh00c/exterior/qyg/",
              1,
              72
            ),
          },
          {
            paint: "Glacier White Pearl",
            color: "#f3f9fc",
            images: vrImageGenerator(
              "sonet/sxw5k2g1uhh00c/exterior/gwp/",
              1,
              72
            ),
          },
          {
            paint: "Intense Red + Aurora black pearl",
            dualTone: true,
            colors: ["#b20220", "#161818"],
            images: vrImageGenerator(
              "sonet/sxw5k2g1uhh00c/exterior/gb3/",
              1,
              72
            ),
          },
          {
            paint: "Glacier white Pearl + Aurora black pearl",
            dualTone: true,
            colors: ["#f3f9fc", "#161818"],
            images: vrImageGenerator(
              "sonet/sxw5k2g1uhh00c/exterior/gb2/",
              1,
              72
            ),
          },
          {
            paint: "Beige gold + Aurora black pearl",
            dualTone: true,
            colors: ["#aaa085", "#010000"],
            images: vrImageGenerator(
              "sonet/sxw5k2g1uhh00c/exterior/gc1/",
              1,
              72
            ),
          },
        ],
      },
      Tech: {
        name: "SONET Tech Line",
        colors: [
          {
            paint: "Intense Red",
            color: "#b20220",
            images: vrImageGenerator(
              "sonet/sxw5k2g1xpp00b/exterior/a6r/",
              1,
              72
            ),
          },
          {
            paint: "Steel Silver",
            color: "#aeadad",
            images: vrImageGenerator(
              "sonet/sxw5k2g1xpp00b/exterior/klg/",
              1,
              72
            ),
          },
          {
            paint: "Gravity Grey",
            color: "#34373a",
            images: vrImageGenerator(
              "sonet/sxw5k2g1xpp00b/exterior/kdg/",
              1,
              72
            ),
          },
          {
            paint: "Aurora Black Pearl",
            color: "#161719",
            images: vrImageGenerator(
              "sonet/sxw5k2g1xpp00b/exterior/abp/",
              1,
              72
            ),
          },
          {
            paint: "Intelligency Blue",
            color: "#0b21b3",
            images: vrImageGenerator(
              "sonet/sxw5k2g1xpp00b/exterior/bnb/",
              1,
              72
            ),
          },
          {
            paint: "Beige Gold",
            color: "#aba186",
            images: vrImageGenerator(
              "sonet/sxw5k2g1xpp00b/exterior/qyg/",
              1,
              72
            ),
          },
          {
            paint: "Glacier White Pearl",
            color: "#f3f9fc",
            images: vrImageGenerator(
              "sonet/sxw5k2g1xpp00b/exterior/gwp/",
              1,
              72
            ),
          },
          {
            paint: "Intense Red + Aurora black pearl",
            dualTone: true,
            colors: ["#b20220", "#161818"],
            images: vrImageGenerator(
              "sonet/sxw5k2g1xpp00b/exterior/gb3/",
              1,
              72
            ),
          },
          {
            paint: "Glacier white Pearl + Aurora black pearl",
            dualTone: true,
            colors: ["#f3f9fc", "#161818"],
            images: vrImageGenerator(
              "sonet/sxw5k2g1xpp00b/exterior/gb2/",
              1,
              72
            ),
          },
          {
            paint: "Beige gold + Aurora black pearl",
            dualTone: true,
            colors: ["#aaa085", "#010000"],
            images: vrImageGenerator(
              "sonet/sxw5k2g1xpp00b/exterior/gc1/",
              1,
              72
            ),
          },
        ],
      },
    },
    explore: {
      video:
        "https://www.kia.com/content/dam/kia2/in/en/images/our-vehicles/seltos/showroom/video/SELTOS-USP-Full-Video-d-01.mp4",
      POSITION_TIME_MAP: {
        0: [0, 300],
        1: [300, 1900],
        2: [1900, 3200],
        3: [3200, 4100],
        4: [4100, 5000],
        5: [5000, 6016],
      },
    },
  },
  {
    name: "Carnival",
    description: "The Ultimate Driving Luxury",
    images: [
      "https://www.kia.com/content/dam/kia2/in/en/images/360vr/carnival/apb92fc5jgg041/exterior/abp/53-d.png",
      "https://www.kia.com/content/dam/kia2/in/en/images/360vr/carnival/apb92fc5jgg041/exterior/abp/01-d.png",
      "https://www.kia.com/content/dam/kia2/in/en/images/360vr/carnival/apb92fc5jgg041/exterior/abp/17-d.png",
      "https://www.kia.com/content/dam/kia2/in/en/images/360vr/carnival/apb92fc5jgg041/exterior/abp/35-d.png",
    ],
    header: {
      bannerVideo:
        "https://www.kia.com/content/dam/kia2/in/en/images/our-vehicles/carnival/CARNIVAL_Mobile_Revised.mp4",
      bannerImage: null,
      videoPoster:
        "https://www.kia.com/content/dam/kia2/in/en/images/our-vehicles/carnival/lp-desktop.png",
      headerLogo:
        "https://www.kia.com/content/dam/kia2/in/en/images/our-vehicles/carnival/showroom/carnival_unit.png",
    },
    design: {
      gtLine: false,
      GT: {
        name: "CARNIVAL Limousine",
        exteriorId: "apb92fc5jgg041",
        colors: [
          {
            paint: "Aurora Black Pearl",
            color: "#161719",
            images: vrImageGenerator(
              "carnival/apb92fc5jgg041/exterior/abp/",
              1,
              72
            ),
          },
          {
            paint: "Glacier White Pearl",
            color: "#f3f9fc",
            images: vrImageGenerator(
              "carnival/apb92fc5jgg041/exterior/gwp/",
              1,
              72
            ),
          },
          {
            paint: "Steel Silver",
            color: "#aeadad",
            images: vrImageGenerator(
              "carnival/apb92fc5jgg041/exterior/klg/",
              1,
              72
            ),
          },
        ],
      },
    },
    explore: {
      video:
        "https://www.kia.com/content/dam/kia2/in/en/our-vehicles/showroom/carnival-product/Video/Desktop/explore-section-video-v5.mp4",
      POSITION_TIME_MAP: {
        0: [0, 300],
        1: [300, 1900],
        2: [1900, 3200],
        3: [3200, 4100],
        4: [4100, 5000],
        5: [5000, 6016],
      },
    },
  },
];
