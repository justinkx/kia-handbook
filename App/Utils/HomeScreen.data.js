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
            paint: "Silver + Orange",
            dualTone: true,
            colors: ["#db5e26", "#adadad"],
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
            paint: "Silver + Orange",
            dualTone: true,
            colors: ["#db5e26", "#adadad"],
            images: vrImageGenerator(
              "seltos/tiw51mc57pp00d/exterior/gb8/",
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
        0: [0, 1150],
        1: [1150, 2100],
        2: [2100, 3200],
        3: [3200, 4000],
        4: [4000, 5050],
        5: [5050, 6016],
      },
      details: {
        0: {
          title: "LED headlamps with DRLs",
          description:
            "The aesthetically crafted Crown Jewel LED headlamps with Heartbeat DRLs give the car sleek looks and a distinctive character.",
        },
        1: {
          title: "Alloy wheels",
          description:
            "The elegant yet sporty crystal cut alloy wheels adds to the sporty premium appeal of the car.",
        },
        2: {
          title: "LED tail lamps",
          description:
            "The scintillating Heartbeat-shaped Tail Lamps builds on the robust stance of the car.",
        },
        3: {
          title: "Sunroof",
          description:
            "With an electric Sunroof over-head, the car adds a sense of freedom and modernity to your drive with an airy cabin.",
        },
        4: {
          title: "2-step Rear Recline Seats",
          description:
            "The Seat reclining feature at the back enhances passenger comfort by enabling the freedom to change their sitting posture with ease.",
        },
        5: {
          title: "Ambient Mood Lighting",
          description:
            "The Ambient and LED Sound mood lights sets your mood right for every drive.",
        },
      },
    },
    performance: {
      title: "Trend Leading Innovator",
      image:
        "https://www.kia.com/content/dam/kia2/in/en/images/our-vehicles/seltos/showroom/compare-seltos-01.png",
      desc: [
        {
          head: 'Smart 20.32cm (8.0") Heads-up Display',
          para: `Smart 20.32cm (8.0") HUD displays driving information to assist safe driving by minimizing movement of driver's line of sight`,
        },
        {
          head: "Smartstream BS6 Compliant Engine",
          para: "Kia Seltos will come in petrol, turbo-petrol and diesel versions and drivers would also have the option to choose from 'Normal', 'Eco' and 'Sport' mode",
        },
        {
          head: `26.03cm (10.25") HD touchscreen with UVO`,
          para: `State of the art 26.03cm (10.25") HD touchscreen with Navigation and UVO connected car technology improves the convenience and safety in the car at the same time adding to the interior style and elegance.`,
        },
      ],
    },
    uvo: {
      title: "Stay Connected",
      desc: "You can’t put a price on peace of mind. UVO lets you drive with confidence, knowing someone can be there to help no matter what happens out on the road.",
      learnMore: "https://www.kia.com/in/uvo.html",
      image:
        "https://www.kia.com/content/dam/kia2/in/en/images/our-vehicles/seltos/showroom/Seltos-UVO-01.jpg",
    },
    segments: ["SPACE", "TECHNOLOGY", "SAFETY", "ENTERTAINMENT"],
    SPACE: {
      title: "Room For Everything",
      desc: "Be it stretching out for your favourite driving position, the large boot space or various utility storages for a weekend destination, the Kia Seltos is bursting with little things to make your drive a pleasure.",
      segments: [
        {
          name: "Holiday",
          image:
            "https://user-images.githubusercontent.com/28846043/127763854-ef454b68-7b19-4442-afa6-85dde21d3862.gif",
        },
        {
          name: "Weekend Trips",
          image:
            "https://www.kia.com/content/dam/kia2/in/en/images/our-vehicles/seltos/showroom/Seltos-RoomForEverything-weekend_trips-new.png",
        },
        {
          name: "Plan for the Unplanned",
          image:
            "https://www.kia.com/content/dam/kia2/in/en/images/our-vehicles/seltos/showroom/RoomForEverything-unplanned-trip-new.png",
        },
      ],
    },
    TECHNOLOGY: {
      title: "Unbeatable technology",
      segments: [
        {
          name: "26.03cm (10.25”) Touchscreen & 10.67cm (4.2”) Color Cluster",
          image:
            "https://user-images.githubusercontent.com/28846043/127770929-ce65a43d-8618-49a7-93cb-91f4c9989f3d.gif",
          desc: `The connected 26.03cm (10.25") HD touchscreen and Advance 10.67cm (4.2”) color display panel makes the cabin look futuristic and reduces distraction while driving.`,
        },
        {
          name: "Front Ventilated Seats",
          image:
            "https://user-images.githubusercontent.com/28846043/127770990-30e5d057-a5aa-4469-80d5-a8fb21a9eed3.gif",
          desc: "Ventilated Front Seats make every drive a breeze especially in hot and humid conditions",
        },
        {
          name: "Smart Pure Air Purifier With Virus Protection",
          image:
            "https://user-images.githubusercontent.com/28846043/127771043-2bf49562-a2dd-408a-9752-1b236dace78a.gif",
          desc: "Smart Pure Air Purifier with Virus Protection ensures you breathe the Cleanest and Safest air when you are inside",
        },
        {
          name: "Multi Drive Modes And Traction Modes",
          image:
            "https://user-images.githubusercontent.com/28846043/127771107-7b06fa60-41c1-4762-b44c-5c82b029657d.gif",
          desc: "Multi-drive Modes (Normal/Eco/Sport) are designed to conquer every terrain with effortless drivability",
        },
        {
          name: "MT Remote Engine Start",
          image:
            "https://user-images.githubusercontent.com/28846043/127771151-5d98fa39-1283-48f7-b813-6fda3476c61d.gif",
          desc: "Remotely start the engine of your manual transmission car using smart key. ",
        },
      ],
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
        "https://www.kia.com/content/dam/kia2/in/en/images/our-vehicles/sonet/showroom/video/my21-explore-desktop.mp4",
      POSITION_TIME_MAP: {
        0: [0, 1100],
        1: [1100, 2000],
        2: [2000, 3000],
        3: [3000, 4000],
        4: [4000, 5050],
        5: [5050, 6016],
      },
      details: {
        0: {
          title: "LED Headlamps with DRLs",
          description:
            "Crown Jewel LED Headlamps highlight the aggressive front and gives it a wild and muscular road presence",
        },
        1: {
          title: "Alloy wheels",
          description:
            "R16 Crystal Cut Alloys make the wheels look sportier and premium",
        },
        2: {
          title: "LED Tail lamps",
          description:
            "Heartbeat LED tail Lamps make the back look aggressive and distinct",
        },
        3: {
          title: "Sunroof",
          description:
            "Electric Sunroof gives compact SUV lovers a chance to connect with the outside world.",
        },
        4: {
          title: "Connected panel",
          description:
            'The connected 26.03cm (10.25") HD touchscreen and Advance 10.67cm (4.2”) Color display panel makes the cabin look futuristic and reduces distraction while driving.',
        },
        5: {
          title: "LED sound mood lights",
          description:
            "LED Sound Mood Lights lets your favourite tracks roar in the urban jungle.",
        },
      },
    },
    performance: {
      title: "Thrilling Performance",
      image:
        "https://www.kia.com/content/dam/kia2/in/en/images/our-vehicles/sonet/showroom/Thrilling-performance-d-01.png",
      desc: [
        {
          head: "Refined 1.5 CRDi Diesel Engines",
          para: "Available in 6 Speed MT (100 PS Power) and First-in Segment (115 PS Power) 6 Speed Advance AT. Power is what drives the Kia Sonet to new adventures.",
        },
        {
          head: "Powerful G1.0 T-GDi Petrol Engine",
          para: "Get ready to rule the urban jungle. The power of 120 PS combined with the option of 6iMT & 7DCT Smartstream engines make driving comfortable.",
        },
        {
          head: "Advanced Smartstream G1.2 Petrol Engine",
          para: "Kia Sonet makes the thrill seeker in you come alive once you take the steering wheel with 5 Speed MT (83PS Power).",
        },
      ],
    },
    uvo: {
      title: "Wild And Connected",
      desc: "The Kia Sonet isn’t just all muscle. Powered by the latest evolution of UVO, it offers you 58 smart ways of staying connected, making it the brainiest of all SUVs. UVO’s advanced technology includes AI Voice Command, Voice assisted Sunroof control, OTA map updates, making your driving experience safe, convenient, and enjoyable.",
      learnMore: "https://www.kia.com/in/uvo.html",
      image:
        "https://www.kia.com/content/dam/kia2/in/en/images/our-vehicles/sonet/showroom/UVO_Sonet-02.jpg",
    },
    segments: ["TECHNOLOGY", "SAFETY", "ENTERTAINMENT"],
    SAFETY: {
      title: "Safe like your home",
      segments: [
        {
          name: "Structure",
          image:
            "https://www.kia.com/content/dam/kia2/in/en/images/our-vehicles/sonet/showroom/Sonet_Structure_1280x640.jpg",
          desc: "Kia Sonet’s structure uses high-strength steel and adhesives to provide comprehensive safety, by reducing the impact in case of a crash",
        },
        {
          name: "6 Airbags",
          image:
            "https://www.kia.com/content/dam/kia2/in/en/images/our-vehicles/sonet/showroom/Sonet-Air-bags_1280x640.jpg",
          desc: "Six Airbags keep you and your family safe from any kind of uncertainty on the road.",
        },
        {
          name: "ESC /HAC /VSM /ABS",
          image:
            "https://user-images.githubusercontent.com/28846043/127764044-cf40c1da-a0f0-4a52-b218-2439e1e39157.gif",
          desc: "Electronic Stability Control & Vehicle Stability Management to ensure excellent braking performance maximised safety.",
        },
        {
          name: "Front parking sensors",
          image:
            "https://www.kia.com/content/dam/kia2/in/en/images/our-vehicles/sonet/showroom/sonet-front-parking-sensor-d.jpg",
          desc: "Parking is always a hassle at tight spots. The front parking sensor ensures precise alignment of your Kia Sonet",
        },
        {
          name: "Tire Pressure Monitor",
          image:
            "https://www.kia.com/content/dam/kia2/in/en/images/our-vehicles/sonet/showroom/sonet-tpm-d-2.jpg",
          desc: "Always be aware of the pressure in your tyres.",
        },
      ],
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
      details: {
        0: {
          title: "LED Headlamps",
          description:
            "The aesthetically crafted LED Headlamp Cluster gives the Carnival a distinctive character.",
        },
        1: {
          title: "Sputtering Alloy Wheels",
          description:
            "With contemporary looks and elegant style, the R18-45.72 cm (18”) Sputtering Alloy Wheels of Kia Carnival are machined to perfection for an undeniable presence on road.",
        },
        2: {
          title: "Sliding Doors",
          description:
            "With the one-touch powered Sliding Doors, experience extravagance as you effortlessly move in and out of the car.",
        },
        3: {
          title: "VIP Seats with RSE",
          description:
            "Settle into the lap of luxury with the soft, premium Napa Leather Upholstery and the 25.65cm (10.1”) Touchscreen Rear Seat Entertainment System of the Carnival.",
        },
        4: {
          title: "Tri-Zone Automatic Temperature Control",
          description:
            "To maximize comfort, the Tri-Zone Temperature Control System enables all – driver, front and rear passengers, to adjust the temperature and air-flow settings just as they like it.",
        },
        6: {
          title: "Dual Sunroof",
          description:
            "The dual sunroof lets in sunlight and unveils a slice of the big, blue sky for passengers in every row.",
        },
      },
    },
    performance: {
      title: "The Ultimate Driving Luxury",
      image:
        "https://www.kia.com/content/dam/kia2/in/en/our-vehicles/showroom/carnival-product/Desktop/Engine.jpg",
      desc: [
        {
          head: "2.2L Diesel Engine with 200 PS and 440 Nm Torque",
          para: "The lightweight and powerful engine churns out 200 PS maximum power and 440Nm maximum torque in addition to being BS6 compliant.",
        },
        {
          head: "8-Speed Sportsmatic Transmission",
          para: "Superior driving, dynamic performance and advanced precision come together perfectly with the 8-Speed Sportsmatic Transmission of the Kia Carnival.",
        },
      ],
    },
    uvo: {
      title: "UVO = Your Voice",
      desc: "With 50 unique features, UVO is the latest evolution in connected car technology and infotainment. It lets you seamlessly connect your smartphone or smartwatch with the kia Carnival.",
      learnMore: "https://www.kia.com/in/uvo.html",
      image:
        "https://www.kia.com/content/dam/kia2/in/en/our-vehicles/showroom/carnival-product/Desktop/UVO.png",
    },
    segments: ["SPACE", "EXTRAVAGANCE", "SAFETY", "ENTERTAINMENT"],
    SPACE: {
      title: "Extravagant in Space",
      desc: "Be it driving your colleagues for a team brunch, taking your family for a vacation or setting out on an adventure with your friends, Kia Carnival comes with versatile seating combinations to make room for everyone and almost everything you need.",
      segments: [
        {
          name: "7 Seater - VIP Seats",
          image:
            "https://www.kia.com/content/dam/kia2/in/en/our-vehicles/showroom/carnival-product/Desktop/9seater.jpg",
        },
        {
          name: "8 Seater",
          image:
            "https://www.kia.com/content/dam/kia2/in/en/our-vehicles/showroom/carnival-product/Desktop/9seater.jpg",
        },
        {
          name: "9 Seater (6 + 3)",
          image:
            "https://www.kia.com/content/dam/kia2/in/en/our-vehicles/showroom/carnival-product/Desktop/9seater.jpg",
        },
      ],
    },
  },
];
