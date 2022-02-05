import { pipe, path, split } from 'ramda';

const getKeyValueByPath = (object: any, objectPath: string) => {
    const pathString = pipe(split(/[[\].]/), path);
    const result = pathString(objectPath)(object);
    return result || '';
}

export default getKeyValueByPath;