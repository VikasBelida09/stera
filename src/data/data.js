import stera1 from "../Assets/stera1.png";
import stera2 from "../Assets/stera2.png";
import stera3 from "../Assets/stera3.png";
import stera4 from "../Assets/stera4.png";
import logo1 from "../Assets/logo11.svg";
import logo2 from "../Assets/svg2.svg";
import logo3 from "../Assets/svguv.svg";
import logo4 from "../Assets/svg3.svg";
import logo11 from "../Assets/logo1.png";
import logo22 from "../Assets/logo2.png";
import logo33 from "../Assets/logo3.png";
import logo44 from "../Assets/logo4.png";
// import logo55 from "../Assets/logo5.png";
import logo66 from "../Assets/logo6.png";
import logo77 from "../Assets/logo7.png";
import logo88 from "../Assets/logo8.png";
import logo99 from "../Assets/logo9.png";
import logo101 from "../Assets/logo10.png";
import image1 from "../Assets/image1.png";
import image2 from "../Assets/image2.png";
import image3 from "../Assets/image3.png";
import image4 from "../Assets/image4.png";
export const qa = [
  {
    question:
      "What is the UVC dose for killing or disabling the COVID-19 virus?",
    answer1:
      "Because the COVID-19 virus (SARS-CoV-2) is so new, the scientific community doesn’t yet have a specific deactivation dosage. However, we know the dosage values for comparable viruses in the same SARS virus family are 10-20 mJ/cm2 using direct UVC light at a wavelength of 254nm; this dosage will achieve 99.9% disinfection (i.e., inactivation) under controlled lab conditions. In real-life, the virus is often hidden or shaded from direct UVC light, reducing UVC’s effectiveness. To compensate, researchers are applying dosages of 1,000 - 3,000 mJ/cm2 to ensure 99.9% deactivation, the current CDC disinfection goal",
  },
  {
    question: `Can we use tanning beds to decontaminate PPE?`,
    answer1: `No. Tanning beds are not considered useful to decontaminate PPE. The lamps in tanning beds are emitting a spectrum of UVA 
    and UVB, wavelengths between 300-400 nm. While there is some antimicrobial efficacy in the UVB spectrum, it is generally pretty 
    low. The UVC portion of the spectrum, 220-280 nm, is much more effective for disinfection. Therefore, I’m afraid that tanning beds 
    cannot be relied upon for this purpose. Theoretically, you could replace the lamps in a tanning bed with those that emit UVC, but 
    you’d also have to remove the acrylic bed surface because UVC does not transmit through that material. By the time you do that 
    much modification to the bed, you may as well build a simple disinfection device using UVC lamps from scratch.`,
  },
  {
    question: `Can we use UVC disinfection to reuse our N-95 masks as our supplies are limited?`,
    answer1: `There are several manufacturers now offering equipment dedicated to disinfecting N95 masks. Please visit the IUVA supplier listings. 
      Note that the IUVA does not endorse any product. This list is intended to highlight vendors who are self-identifying as having devices that may 
      be helpful during the covid-19 pandemic.
      `,
    answer2: `That being said, the research community is scrambling right now to try to answer some of these questions as quickly as possible. 
      See the following for some preliminary “educated guesses” about how to do it, in the context of disinfecting hospital masks.
      `,
    answer3: `
      There is some thought in the UV community that UVC together with some other process, notably heating to 65C in a humid environment, 
      or hydrogen peroxide vapor, might be a good multi-barrier process. The heating or hydrogen peroxide vapor can penetrate into material 
      better than UV and is believed to be able to kill the SARS-CoV-2 virus, but it may be less effective against many of the other pathogens 
      that still exist in hospital settings. The UVC can supplement the virus kill, while also killing many of these other pathogens.`,
  },
  {
    question: `Can the products I find on websites such as Amazon be safely used for medical disinfection?`,
    answer1: `Devices sold on general marketplaces such as Amazon and Alibaba are not regulated for their UV output, and devices sold as UV-C 
      emitters cannot be guaranteed to perform as described. UV-C sources and devices should be purchased from trusted, reputable suppliers.
      Please consult with the supplier and see the IUVA Advice for further guidance`,
  },
  {
    question: `Can You Use UVC for direct human disinfection?`,
    answer1: `UVC is damaging to the skin and to the eyes. DO NOT look at the UV light or expose any part of your body. UVC should not be, and is not 
      intended for, use for direct human disinfection.`,
    answer2: `A possible exception is far UV light (see the FAQ that is specific to far UV light)`,
  },
  {
    question: `How do operators remain safe when using UVC lights to clean surfaces?`,
    answer1: `Like any disinfection system, UVC devices must be used properly to be safe.`,
    answer2: `They all produce varying amounts of UVC light in wavelengths of 200 – 280nm. UVC light is much more energetic than normal sunlight, 
      and can cause a severe sunburn-like reaction to your skin, and similarly, could damage the retina of your eye, if exposed.
      `,
    answer3: `Some devices also produce ozone as part of their cycle, others produce light and heat like an arc welder, others move during their cycles. 
    Hence, in general, machine-human safety needs to be considered with all disinfection devices.
    `,
    answer4: `Suitable PPE should be worn at all times when there is a risk of UV exposure to the skin or eyes. Be aware of stray light from the UV source
    and avoid irradiation of reflective surfaces`,
  },
  {
    question: `Would the use of UVC at 185nm wavelength, which generates ozone, be as effective as germicidal 
      UVC or only 254nm?`,
    answer1: `Studies have shown that UVC light at wavelengths of 254nm-265nm disrupts the DNA/RNA replication process in the cells. Ozone is a 
      toxic chemical produced by 185nm UVC light interacting with oxygen in the air, that disinfects much like any chemical disinfectant. While 
      ozone does dissipate in time, it can be corrosive and its effects on the item being treated needs to be understood before being used. Also, 
      it is a lung irritant, and is regulated by NIOSH as a known safety hazard`,
  },
  {
    question: `We are looking into the use UVC light to disinfect certain areas of the electric power plants. 
      Have you done any research on the noise that these devices can induce into electronics 
      (EMI/RFI effect)?`,
    answer1: `Most UVC disinfection devices make UVC light using a fluorescent-light bulb; the bulb is unique, but otherwise the device uses ballasts, 
      wiring and controls similar to any other fluorescent light fixtures. Other sources include LEDs (typically low voltage/low current) or xenon 
      flash bulbs (using high voltage capacitor discharge circuits). The potential for EMI/RFI effects will vary accordingly`,
  },
  {
    question: `Can you tell us more about the penetration of UVC through "normal household" items?`,
    answer1: `There is essentially zero penetration of UVC into any solid material that doesn’t otherwise transmit it – it would all be absorbed within a 
      few microns. There are only a scant few materials that do transmit UVC: high-purity silicate glasses, very thin sections of certain 
      fluoropolymers, sapphire, and some other crystals. Most other polymers, even if visibly transparent, are not at all transmissive UVC. 
      I think thin sections of pure polyethylene can transmit some UVC, depending on its microstructure and how it was processed. It is probably 
      safe to say that a thin enough film of any polymer could transmit UVC to some degree.
      `,
    answer2: `
      Depending on how thick a cotton T-shirt is, it may allow some UVC to get through because of porosity (gaps between fibers/yarns) and 
      some tiny amount of internal reflection, but otherwise cotton fibers do not transmit UVC, per se.
      `,
    answer3: `Cardboard is as good as a brick wall. White paper or cardstock might transmit a bit of UVC based on the same principle like the cotton 
      textile, but likely not much.
      `,
    answer4: `Two generic tips:
      `,
    answer5: `For a disinfection application in which you WANT something exposed to UVC, assume it has no penetration into the material at all. It is 
      only a surface phenomenon.
      For a shielding application in which you DON’T want exposure to UVC, if you cannot see blue light from the lamp getting through the material, 
      it is safe to assume that you have also blocked all the UVC`,
  },
  {
    question: `How can you tell if "UV protective" glass and glass films are actually treated to block UVA rays. 
      Is there an easy way to tell?`,
    answer1: `If you can get access to a UV spectrophotometer. which can record the transmittance of the glass or film as a function of wavelength, you can 
      easily see if the UV rays (less than 400 nm) are blocked.`,
    answer2: `One other way would be to get access to a UV lamp that is used in sun tanning parlors. If you expose this UV light to a white shirt, the shirt 
      will glow blue due to fluorescence from the pigments in the shirt (this is the common “disco” effect). If you place the glass or film between the 
      UV lamp and the shirt, the blue glow will disappear if the material blocks UV`,
  },
  {
    question: `We keep seeing the terms ‘watts’ and ‘joules’ in descriptions of how much UV is required to disinfect 
      something. What do these terms mean? Are they the same? Why are they important?`,
    answer1: `Most people seem to be familiar with the term ‘watts' (from light bulbs and electric bills); but probably not the term ‘joules' (a metric 
        measurement term). In short, both are used in measuring energy in any form (e.g., electricity as well as light):
        `,
    answer2: `A Watt is a measure of the rate of energy delivery (analogous to gallons-per-minute flow rate for water delivery).
        A Joule is a cumulative measure of the total amount of energy delivered (analogous to total gallons of water delivered)`,
  },
];
export const data = [
  {
    img: stera1,
    id: 1,
    title: `Ozone Light Sterilization, 
  Deep Deodorization`,
    description: `The air is oxidized by the ozone 
  lampin the in the machine to gene-
  rate low concentration of ozone 
  penetrates the cell membrane tissue
  to destroy the lipoprotein in the 
  membrane,changes the permeability 
  of the cell, causes the cell to lyse and
  die, and reaches the effect of 
  sterilization `,
  },
  {
    img: stera2,
    id: 2,
    title: `304 Stainless Steel Inner,
    All-round UV Disinfection`,
    description: `ensures every corner of the cabinet 
    can be irradiated to achieve true 
    sterilization without dead corners. 
    At the same time,resistant to corro-
    rsion, easy to clean and
    no dirt hidden.`,
  },
  {
    img: stera3,
    id: 3,
    title: `Sensitive Touch Control,
    Simple Operation`,
    description: `Eliminate tedious operations, 
    simply complexity touch the keys,
    at a glance, elderly can also easily 
    operate, making daily disinfection 
    more convenient and 
    worry free.`,
  },
  {
    img: stera4,
    id: 4,
    title: `Self Adjustable Drawers`,
    description: `Convenient to adjust the 
    way you you want to.`,
  },
];
export const mainContainerIcons = [
  {
    key: 1,
    img: logo1,
    description: `Compact and
    Portable`,
    color: "#707277",
  },
  {
    key: 2,
    img: logo2,
    height: 160,
    description: "UV Sterilization",
    color: "#707277",
  },
  {
    key: 3,
    img: logo3,
    height: 160,
    description: "Easy to operate",
    color: "#707277",
  },
  {
    key: 4,
    img: logo4,
    height: 160,
    description: "3 Working Modes",
    color: "#707277",
  },
];
export const mainFeaturesIcons = [
  {
    id: 11,
    img: logo11,
    description: "100% Safe and Reliable",
  },
  {
    id: 12,
    img: logo22,
    description: "One Touch UV-C Irradiation",
  },
  {
    id: 13,
    img: logo33,
    description: "Kills 99.9% of Virus",
  },
  {
    id: 14,
    img: logo44,
    description: "360 Degree Surface Disinfection",
  },
  // {
  //   id: 15,
  //   img: logo55,
  //   description: "Built-in induction Night Light",
  // },
  {
    id: 16,
    img: logo66,
    description: "18l UV Sterilizer",
  },
  {
    id: 17,
    img: logo77,
    description: "UV Light + Ozone Layer",
  },
  {
    id: 18,
    img: logo88,
    description: "Air inflow Filtaration",
  },
  {
    id: 19,
    img: logo99,
    description: "ABS + Stainless Steel",
  },
  {
    id: 20,
    img: logo101,
    description: "4 working modes",
  },
];
export const subUsabilityImages = [
  {
    id: 1,
    title: "Household",
    img: image1,
    description: `Clothes, Slippers, School Bags, Tv Remote, Toys, Keys, Bottles, Masks, 
    Mobile phones, Laptop and ipads etc`,
  },
  {
    id: 2,
    title: "Commercial",
    img: image2,
    description: `Loose currency & Coins, Pen, Notebooks, Product before selling them, 
    Tools before starting work in factory.`,
  },
  {
    id: 3,
    title: "Medical",
    img: image3,
    description: `PPE such as, N95 Mask, Eye Goggles, Face shield, Sanitized PPE can be refused,
    Medical Equipment like Intubation tubes`,
  },
  {
    id: 4,
    title: "Salon & Spa",
    img: image4,
    description: `Nail tools and other equipment, products before selling, sanitize and clean 
    objects like towels, scissors`,
  },
];
