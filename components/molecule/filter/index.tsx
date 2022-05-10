import Multiselect from 'multiselect-react-dropdown';

const Filter = ({ filterList, onSelect, onRemove, preselect }) => {
  let options = filterList.map(filter => {
    return { name: filter.title, id: filter.id };
  });
  options.unshift({ name: 'Select All', id: 1 });

  return (
    <Multiselect
      options={options} // Options to display in the dropdown
      selectedValues={preselect} // Preselected value to persist in dropdown
      onSelect={onSelect} // Function will trigger on select event
      onRemove={onRemove} // Function will trigger on remove event
      displayValue="name" // Property name to display in the dropdown options
      placeholder="Filter by Category"
      className="max-w-[50vw]"
    />
  );
};
export default Filter;
