// noinspection JSCheckFunctionSignatures

import {render, screen} from '@testing-library/react';
import AwesomeCounter from "./AwesomeCounter";
import userEvent from "@testing-library/user-event";

test("it should have the correct initial value when set to 7", () => {
    render(<AwesomeCounter initialValue={7}/>)
    const count = screen.queryByText(7);
    expect(count).toBeVisible();
});

test("it should have the correct initial value when set to 0", () => {
    render(<AwesomeCounter/>)
    const count = screen.queryByText(0);
    expect(count).toBeVisible();
});

test("it should increase the value correctly when add is clicked once", () => {
    render(<AwesomeCounter initialValue={1}/>)
    const addButton = screen.getByText(/Add/i)
    userEvent.click(addButton);
    const count = screen.queryByText(2);
    expect(count).toBeVisible();
});

test("it should increase the value correctly when add is clicked twice", () => {
    render(<AwesomeCounter initialValue={1}/>)
    const addButton = screen.getByText(/Add/i)
    userEvent.click(addButton);
    userEvent.click(addButton);
    const count = screen.queryByText(3);
    expect(count).toBeVisible();
});

test("it should decrease the value correctly when remove is clicked once", () => {
    render(<AwesomeCounter initialValue={5}/>)
    const removeButton = screen.getByText(/Remove/i)
    userEvent.click(removeButton);
    const count = screen.queryByText(4);
    expect(count).toBeVisible();
});

test("it should decrease the value correctly when remove is clicked twice", () => {
    render(<AwesomeCounter initialValue={5}/>)
    const removeButton = screen.getByText(/Remove/i)
    userEvent.click(removeButton);
    userEvent.click(removeButton);
    const count = screen.queryByText(3);
    expect(count).toBeVisible();
});


test("it should not allow a navigate number when the initial value is 2 and remove called 4 times", () => {
    render(<AwesomeCounter initialValue={2}/>)
    const removeButton = screen.getByText(/Remove/i)
    userEvent.click(removeButton);
    userEvent.click(removeButton);
    userEvent.click(removeButton);
    userEvent.click(removeButton);
    const count = screen.queryByText(0);
    expect(count).toBeVisible();
});