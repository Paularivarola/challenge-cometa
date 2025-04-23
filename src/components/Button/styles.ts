export const variantClasses: Record<string, string> = {
  action:
    "bg-[#D42903] text-white border border-none mx-1 hover:bg-[gray] hover:text-white active:bg-[#28a745] active:text-white",
  "icon-action":
    "w-[34px] p-0 active:bg-[#28a745] active:text-white hover:bg-[#28a745] hover:text-white",
  "icon-menu":
    "w-[34px] p-0 text-[#c8c7cc] hover:bg-[#f3ecf8] active:bg-[#820ad1]",
  "icon-gray-circle":
    "w-[53px] h-[53px] p-0 flex items-center justify-center bg-gray-200 text-black rounded-full hover:bg-gray-300 hover:text-white transition-colors duration-200",
  "icon-black-circle":
    "w-[53px] h-[53px] p-0 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-200 hover:text-black transition-colors duration-200",
  "icon-secondary":
    "p-0 rounded-full bg-[#efeff4] text-[#820ad1] hover:bg-[#28a745] hover:text-white",
  secondary:
    "min-w-[123px] px-3 py-2 bg-[#E33F03] text-white border-[#E33F03] rounded-[2rem] hover:border hover:border-[#E33F03] hover:text-[#E33F03] hover:bg-transparent hover:rounded-[2rem]",
  cancel:
    "w-[181px] h-[35px] min-w-[100px] border border-[#ff2a98] text-[#ff2a98] hover:bg-[#ff2a98] hover:text-white",
  success:
    "w-[181px] h-[35px] min-w-[100px] border border-[#1ad598] text-[#1ad598] hover:bg-[#1ad598] hover:text-white",
  "icon-add":
    "w-[34px] p-0 bg-[#f3ecf8] text-[#820ad1] rounded-tr-[8px] rounded-br-[8px]",
  tertiary:
    "min-w-[123px] px-3 py-2 justify-between border border-white bg-transparent text-white mx-[5px] hover:bg-[white] hover:text-black",
  primary:
    "w-max bg-[#28a745] text-white hover:bg-[#bd8ddd] hover:text-white active:bg-black",
  "primary-light":
    "bg-[#57e6ff] text-[#261a3a] text-[10px] font-bold hover:bg-[#ace5ef] active:bg-[#261a3a] active:text-white",
  tab: "border-none text-black hover:bg-[#bd8ddd]",
  "tab-secondary":
    "bg-transparent border border-[#afa9c6] text-[#820ad1] font-light hover:bg-[#820ad1] hover:text-white hover:border-[#820ad1] disabled:text-[#8d8d8d] disabled:bg-[#e6e6e6] disabled:border-none",
  group: "bg-[#efeff4] text-[#820ad1] hover:text-black hover:bg-[#c6c6cb]",
};

export const selectedClasses: Record<string, string> = {
  action: "bg-[#efeff4] text-[#820ad1] border-none",
  tab: "bg-[#efeff4] text-[#820ad1] border-none",
  "tab-secondary": "bg-white text-black border border-white",
  group: "bg-white text-[#820ad1] border border-[#820ad1]",
};
