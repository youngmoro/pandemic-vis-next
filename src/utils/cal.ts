export const mapping = (array: any[]) => {
  return array.map((e) => ({
    lat: e.lat,
    lng: e.lon,
    //新しいウイルスほど長い、細い
    size: Number(e.divergence) * 0.005,
    r: 0.5 + 25 / Number(e.divergence),
    //新しい日付ほど赤い
    color: calColor(new Date(e.date)),
    label: "division:" + e.division + "\ndivergence:" + e.divergence,
  }));
};

export const calColor = (date: Date) => {
  const diff = calDiff(date); //0-1017
  const red = Math.floor(255 - (diff / 1017) * 140);
  const blue = Math.floor(100 + (diff / 1017) * 80);
  return rgb2hex([red, 100, blue, 180]);
};

export const calDiff = (date: Date) => {
  const now = new Date("2022 / 10 / 10");
  const diffTime = now.getTime() - date.getTime();
  const diffDay: number = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDay;
};

export const rgb2hex = (rgb: number[]) => {
  return (
    "#" +
    rgb
      .map(function (value) {
        return ("0" + value.toString(16)).slice(-2);
      })
      .join("")
  );
};
