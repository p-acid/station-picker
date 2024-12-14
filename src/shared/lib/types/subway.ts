export interface Station {
  lineNum: string; // 노선 번호
  stationNum: string; // 역 코드
  externalCode: string; // 외부 코드
  stationName: string; // 역 이름
  stationNameEng: string; // 영어 이름
  stationNameJpn: string; // 일본어 이름
  stationNameChn: string; // 중국어 이름
  transferLines: string[]; // 환승 가능한 호선 번호
}

// GroupedStations: lineNum을 기준으로 그룹화된 데이터 타입
export type GroupedStations = Record<string, Station[]>;
