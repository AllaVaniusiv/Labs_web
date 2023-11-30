import React, { useContext, useState } from "react";
import { FiltersContainer, ItemsContainer, SelectWrapper, SortDirectionButton } from "./Catalog.styled";
import CardItem from "../../components/CardItem/CardItem";
import PrimarySelect from "../../components/PrimarySelect/PrimarySelect";
import SearchInput from "../../components/SearchInput/SearchInput";
import {
    UpCircleOutlined,
    DownCircleOutlined
} from "@ant-design/icons";

import { ItemContext } from "../../context/Items";

const sortOptions = [
    { value: "no_sort", label: "No sort" },
    { value: "name", label: "Sort by name" },
    { value: "price", label: "Sort by price" },
];

const filterOptions = [
    { value: "all", label: "All categories" },
    { value: "led", label: "Led" },
    { value: "laser", label: "Laser" },
    { value: "inkjet", label: "Inkjet" },
];

const sortingFunctions = {
    "price": (a,b) => a.price - b.price,
    "name": (a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0),
    "no_sort": () => {}
};

const Catalog = () => {
    const data = useContext(ItemContext);
    const [items, setItems] = useState(data);

    const [sortMode, setSortMode] = useState("no_sort");
    const [filterMode, setFilterMode] = useState("all");
    const [searchValue, setSearchValue] = useState("");
    const [reverseSort, setReverseSort] = useState(false);

    const applyFilters = ({sort = sortMode, filter = filterMode, search = searchValue, reverse = reverseSort}) => {
        let newItems = [...data];
        console.log(data);

        const searchPattern = new RegExp(search, "i");

        newItems = newItems.filter(a => searchPattern.test(a.title));

        newItems.sort(sortingFunctions[sort]);

        if (filter !== "all") {
            newItems = newItems.filter(a => a.category === filter);
        }

        if (reverse) {
            newItems.reverse();
        }

        console.log(newItems);
        setItems([...newItems]);
        console.log(search);
    }

    const onSortChange = (value) => {
        console.log(value);
        setSortMode(value);
        setReverseSort(false);
        applyFilters({sort: value, reverse: false});
    }

    const onFilterChange = (value) => {
        console.log(value);
        setFilterMode(value);
        setReverseSort(false);
        applyFilters({filter: value, reverse: false});
    }

    const onSearch = (value) => {
        console.log(value);
        setSearchValue(value);
        setReverseSort(false);
        applyFilters({search: value,  reverse: false});
    }

    const reverseChange = (reverse) => {
        setReverseSort(reverse);
        applyFilters({reverse: reverse});
    }

    return (
        <div>
            <FiltersContainer>
                <SelectWrapper>
                    <PrimarySelect
                        defaultValue={sortMode}
                        onChange={onSortChange}
                        options={sortOptions}
                    />
                    <div style={{display: "flex", flexDirection: "column", marginRight: "20px"}}>
                        <SortDirectionButton 
                            type="text"
                            onClick={() => reverseChange(false)}
                            disabled={!reverseSort}
                        >
                            <UpCircleOutlined style={{ margin: "0px" }} />
                        </SortDirectionButton>
                        <SortDirectionButton 
                            type="text"
                            onClick={() => reverseChange(true)}
                            disabled={reverseSort}
                        >
                            <DownCircleOutlined style={{ margin: "0px" }} />
                        </SortDirectionButton>

                    </div>
                    <PrimarySelect 
                        defaultValue={filterMode}
                        onChange={onFilterChange}
                        options={filterOptions}
                    />
                </SelectWrapper>
                <SearchInput 
                    defaultValue={searchValue}
                    placeholder="Find printer"
                    onSearch={onSearch}
                />
            </FiltersContainer>
            <ItemsContainer>
                {
                items.length ?
                items.map(({ title, text, image, price, id }) => (
                    <CardItem
                        title={title}
                        text={text}
                        imageSrc={image}
                        price={price}
                        id={id}
                        key={id}
                    />
                )) :
                <h2>No Items</h2>
                }
            </ItemsContainer>
        </div>
    )
};

export default Catalog;