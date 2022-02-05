import { PlayerPosition } from "@/types/postion";

const filterPostionsList = (array: PlayerPosition[]) => array.filter((item) => {
    return item.fullName !== 'Unknown' && item.fullName !== 'Head Coach'
});

export default filterPostionsList;