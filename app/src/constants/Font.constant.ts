interface FontFamily {
  normal: string;
  semibold: string;
  bold: string;
}

interface FontFamilies {
  OPENSANS: FontFamily;
}

export const fontFamilies: FontFamilies = {
  OPENSANS: {
    normal: 'Open Sans',
    semibold: 'Open Sans Semibold',
    bold: 'Open Sans Bold',
  },
};
