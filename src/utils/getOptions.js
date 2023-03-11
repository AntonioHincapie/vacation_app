export default function getOptions(
  array,
  value,
  attribute = null,
  isArray = false
) {
  if (isArray) {
    const a = array
      .map((i) => i[value])
      .reduce((acc, item) => acc.concat(item));
    return a.reduce((acc, item) => {
      if (acc.filter((i) => i.value === item.id).length < 1)
        return acc.concat({ text: item[attribute], value: item.id });
      return acc;
    }, []);
  }

  if (attribute) return getAttributes(array, value, attribute);
  return getNormal(array, value);
}

function getAttributes(array, value, attribute) {
  return array
    .map((t) => t[value])
    .reduce((acc, item) => {
      if (acc.filter((i) => i.value === item[attribute]).length < 1)
        return [...acc, { text: item[attribute], value: item[attribute] }];
      return acc;
    }, []);
}

function getNormal(array, value) {
  return array
    .map((t) => t[value])
    .reduce((acc, item) => {
      if (acc.filter((i) => i.value === item).length < 1)
        return [...acc, { text: item, value: item }];
      return acc;
    }, []);
}
