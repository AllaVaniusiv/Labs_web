import React, { useState } from "react";
import { FiltersContainer, ItemsContainer, SelectWrapper, SortDirectionButton } from "./Catalog.styled";
import CardItem from "../../components/CardItem/CardItem";
import PrimarySelect from "../../components/PrimarySelect/PrimarySelect";
import SearchInput from "../../components/SearchInput/SearchInput";
import {
    CaretUpOutlined,
    CaretDownOutlined
} from "@ant-design/icons";

const data = [
    {
        id: "1",
        title: ' HP ENVY ',
        text: "For everyone in the family.Print and scan documents, photos, and ...",
        image: require("../../icons/printer4.jpg"),
        price: 6499,
        category: "inkjet",
    },
    {
        id: "2",
        title: ' HP OfficeJet Pro ',
        text: "Save energy with HP Auto-On/Auto-Off technology This printer is a  ...",
        image: require("../../icons/printer5.jpg"),
        price: 6928,
        category: "led",
    },
    {
        id: "3",
        title: ' HP LaserJet ',
        text: "This printer is a compact and inexpensive monochrome laser printer ...",
        image: require("../../icons/printer6.jpg"),
        price: 6699,
        category: "laser",
    },
    {
        id: "4",
        title: ' HP LaserJet Tank ',
        text:"The equipment of compact sizes will print both documents and even ...",
        image: require("../../icons/printer7.jpg"),
        price: 12250,
        category: "laser",
    },
    {
        id: "5",
        title: 'HP DeskJet',
        text: " All the basics, with easy-to-use features.Print, scan, and copy...",
        image: require("../../icons/printer8.jpg"),
        price: 10305,
        category: "led",
    },
    {
        id: "6",
        title: ' HP Smart Tank ',
        text:" High-capacity ink tank printers designed for the whole family ...",
        image: require("../../icons/printer9.jpg"),
        price: 6550,
        category: "inkjet",
    },
    {
        id: "7",
        title: ' HP OfficeJet Mobile ',
        text:" Perfect for those who need to take their printer on the go ...",
        image: require("../../icons/printer10.jpg"),
        price: 11350,
        category: "led",
    },
];

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
    const [items, setItems] = useState(data);

    const [sortMode, setSortMode] = useState("no_sort");
    const [filterMode, setFilterMode] = useState("all");
    const [searchValue, setSearchValue] = useState("");
    const [reverseSort, setReverseSort] = useState(false);

    const applyFilters = ({sort = sortMode, filter = filterMode, search = searchValue, reverse = reverseSort}) => {
        let newItems = [...data];
        console.log(search);

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
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <SortDirectionButton 
                            type="text"
                            onClick={() => reverseChange(false)}
                            disabled={!reverseSort}
                        >
                            <CaretUpOutlined style={{ margin: "0px" }} />
                        </SortDirectionButton>
                        <SortDirectionButton 
                            type="text"
                            onClick={() => reverseChange(true)}
                            disabled={reverseSort}
                        >
                            <CaretDownOutlined style={{ margin: "0px" }} />
                        </SortDirectionButton>

                    </div>
                    <PrimarySelect 
                        defaultValue={filterMode}
                        onChange={onFilterChange}
                        options={filterOptions}
                    />
                    {/* <PrimaryButton onClick={applyFilters}>Apply</PrimaryButton> */}
                </SelectWrapper>
                <SearchInput 
                    defaultValue={searchValue}
                    placeholder=""
                    onSearch={onSearch}
                />
            </FiltersContainer>
            <ItemsContainer>
                {
                items.map(({ title, text, image, price, id }) => (
                    <CardItem
                        title={title}
                        text={text}
                        imageSrc={image}
                        price={price}
                        key={id}
                    />
                ))
                }
            </ItemsContainer>
        </div>
    )
};

export default Catalog;