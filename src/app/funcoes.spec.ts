import { trimString } from "./funcoes";

fdescribe('funcoes', () => {
  it('should trim a given string', () => {
    const input = " a b c";
    const expected = "a b c"
    expect(trimString(input)).toEqual(expected)
  })

  it('should return empty string if passed a blank string', () => {
    const input = "     ";
    const expected = ""
    expect(trimString(input)).toEqual(expected)
  })

  it('should trim last spaces', () => {
    const input = "aaa  ";
    const expected = "aaa"
    expect(trimString(input)).toEqual(expected)
  })

  it('should trim initial spaces', () => {
    const input = "   aaa";
    const expected = "aaa"
    expect(trimString(input)).toEqual(expected)
  })

})
