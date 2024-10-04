export const decodeDataUrl = (dataUrl: string, width: string, height: string) => {
  const base64Index = dataUrl.indexOf(",") + 1;
  const svgString = dataUrl.slice(base64Index);
  const decodedSvg = decodeURIComponent(svgString);

  const correctedSvgData = decodedSvg
    .replace(/width="undefined"/g, width)
    .replace(/height="undefined"/g, height)
    .replace(/x="NaN"/g, 'x="50%"')
    .replace(/y="NaN"/g, 'y="50%"')
    .replace(/undefinedxundefined/g, "Avatar");

  // Закодируем в Base64
  const base64Svg = `data:image/svg+xml;base64,${btoa(correctedSvgData)}`;
  return base64Svg;
};
