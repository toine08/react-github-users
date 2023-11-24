import { FormEvent, useState } from "react";
type Props = {
  fetchData: (username: string) => void;
};

function Form({ fetchData }: Props) {
  const [username, setUsername] = useState("");

  async function handleSubmit(event: FormEvent) {
    setUsername("");
    event.preventDefault();
    fetchData(username);
  }
  return (
    <form className="w-full max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="flex mt-10">
        <input
          className="block w-full px-3 py-2 border border-gray-300 form-input rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <button
          type="submit"
          className="px-3 py-2 ml-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md leading-4 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-50 active:bg-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
