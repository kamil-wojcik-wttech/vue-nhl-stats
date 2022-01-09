import { ref } from 'vue';
import { filter } from 'ramda';
import getKeyValueByPath from '../utils/getKeyValueByPath';

const useFilters = () => {
    // data
    const selectedFilters = ref<String[]>([]);

    // methods
    const isFilterNameOnList = (name: string) => selectedFilters.value.includes(name);

    const updateFilterList = (newFilter: string) => {
        if (isFilterNameOnList(newFilter)) {
            selectedFilters.value = filter((item) => item !== newFilter, selectedFilters.value);
        } else {
            selectedFilters.value.push(newFilter);
        }
    };

    const filterCollection = (array: any, objectKey: string) => {
        if (!selectedFilters.value.length) {
            return array;
        }

        return array.filter((item: any) => {
            const keyValue = getKeyValueByPath(item, objectKey) as string;
            return selectedFilters.value.includes(keyValue);
        });
    }

    return {
        selectedFilters,
        isFilterNameOnList,
        updateFilterList,
        filterCollection
    }
}

export default useFilters;