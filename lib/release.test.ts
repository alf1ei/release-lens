import { describe,it,expect } from "vitest";
import { classify,suggestVersion,buildMarkdown } from "./release";
describe("classify",()=>{it("detects features",()=>expect(classify("feat: add search")).toBe("feature"));it("detects fixes",()=>expect(classify("fix: prevent crash")).toBe("fix"));it("detects breaking changes",()=>expect(classify("feat!: change API")).toBe("breaking"));it("defaults to maintenance",()=>expect(classify("docs: update guide")).toBe("maintenance"));});
describe("version",()=>{it("prioritizes major",()=>expect(suggestVersion(["feature","breaking"])).toBe("major"));it("suggests minor for features",()=>expect(suggestVersion(["fix","feature"])).toBe("minor"));it("suggests patch otherwise",()=>expect(suggestVersion(["fix"])).toBe("patch"));});
describe("markdown",()=>{it("links evidence to source commits",()=>expect(buildMarkdown("Release","Summary",[{sha:"1234567890",message:"fix: bug",url:"https://example.com/commit"}])).toContain("https://example.com/commit"));});
