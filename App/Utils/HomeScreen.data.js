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
      gt: {
        name: "Seltos GT Line",
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
      tech: {
        name: "Seltos GT Line",
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
      gt: {
        name: "Sonet GT Line",
        colors: [
          {
            paint: "Intense Red",
            color: "#b20220",
            image:
              "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1uhh00c/exterior/a6r/08-d.png",
          },
          {
            paint: "Steel Silver",
            color: "#aeadad",
            image:
              "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1uhh00c/exterior/klg/08-d.png",
          },
          {
            paint: "Gravity Grey",
            color: "#34373a",
            image:
              "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1uhh00c/exterior/kdg/08-d.png",
          },
          {
            paint: "Aurora Black Pearl",
            color: "#161719",
            image:
              "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1uhh00c/exterior/abp/08-d.png",
          },
          {
            paint: "Intelligency Blue",
            color: "#0b21b3",
            image:
              "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1uhh00c/exterior/bnb/08-d.png",
          },
          {
            paint: "Beige Gold",
            color: "#aba186",
            image:
              "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1uhh00c/exterior/qyg/08-d.png",
          },
          {
            paint: "Glacier White Pearl",
            color: "#f3f9fc",
            image:
              "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1uhh00c/exterior/gwp/08-d.png",
          },
          {
            paint: "Intense Red + Aurora black pearl",
            dualTone: true,
            colors: ["#b20220", "#161818"],
            image:
              "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1uhh00c/exterior/gb3/08-d.png",
          },
          {
            paint: "Glacier white Pearl + Aurora black pearl",
            dualTone: true,
            colors: ["#f3f9fc", "#161818"],
            image:
              "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1uhh00c/exterior/gb2/08-d.png",
          },
          {
            paint: "Beige gold + Aurora black pearl",
            dualTone: true,
            colors: ["#aaa085", "#010000"],
            image:
              "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1uhh00c/exterior/gc1/08-d.png",
          },
        ],
      },
      tech: {
        name: "SONET Tech Line",
        colors: [
          {
            paint: "Intense Red",
            color: "#b20220",
            image:
              "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1xpp00b/exterior/a6r/08-d.png",
          },
          {
            paint: "Steel Silver",
            color: "#aeadad",
            image:
              "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1xpp00b/exterior/klg/08-d.png",
          },
          {
            paint: "Gravity Grey",
            color: "#34373a",
            image:
              "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1xpp00b/exterior/kdg/08-d.png",
          },
          {
            paint: "Aurora Black Pearl",
            color: "#161719",
            image:
              "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1xpp00b/exterior/abp/08-d.png",
          },
          {
            paint: "Intelligency Blue",
            color: "#0b21b3",
            image:
              "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1xpp00b/exterior/bnb/08-d.png",
          },
          {
            paint: "Beige Gold",
            color: "#aba186",
            image:
              "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1xpp00b/exterior/qyg/08-d.png",
          },
          {
            paint: "Glacier White Pearl",
            color: "#f3f9fc",
            image:
              "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1xpp00b/exterior/gwp/08-d.png",
          },
          {
            paint: "Intense Red + Aurora black pearl",
            dualTone: true,
            colors: ["#b20220", "#161818"],
            image:
              "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1xpp00b/exterior/gb3/08-d.png",
          },
          {
            paint: "Glacier white Pearl + Aurora black pearl",
            dualTone: true,
            colors: ["#f3f9fc", "#161818"],
            image:
              "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1xpp00b/exterior/gb2/08-d.png",
          },
          {
            paint: "Beige gold + Aurora black pearl",
            dualTone: true,
            colors: ["#aaa085", "#010000"],
            image:
              "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1xpp00b/exterior/gc1/08-d.png",
          },
        ],
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
  },
];
