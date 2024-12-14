export const groupByLineNum = (data: any) => {
  const stationNameMap = data.reduce((map: any, station: any) => {
    const stationName = station.station_nm;
    if (!map[stationName]) map[stationName] = [];
    map[stationName].push(station);
    return map;
  }, {});

  const groupedData = data.reduce((acc: any, station: any) => {
    const transformedStation = {
      lineNum: station.line_num.replace(/^0+/, ""),
      stationNum: station.station_cd,
      externalCode: station.fr_code,
      stationName: station.station_nm,
      stationNameEng: station.station_nm_eng,
      stationNameJpn: station.station_nm_jpn,
      stationNameChn: station.station_nm_chn,
      transferLines: [],
    };

    const stationsWithSameName = stationNameMap[station.station_nm] || [];
    transformedStation.transferLines = stationsWithSameName
      .filter((s: any) => s.line_num !== station.line_num)
      .map((s: any) => s.line_num.replace(/^0+/, ""));

    const { lineNum } = transformedStation;

    if (!acc[lineNum]) acc[lineNum] = [];
    acc[lineNum].push(transformedStation);
    return acc;
  }, {});

  return groupedData;
};

export const sortStationsByCode = (groupedData: any) => {
  Object.keys(groupedData).forEach((line) => {
    groupedData[line].sort((a: any, b: any) => {
      return parseInt(a.stationNum, 10) - parseInt(b.stationNum, 10);
    });
  });
  return groupedData;
};
