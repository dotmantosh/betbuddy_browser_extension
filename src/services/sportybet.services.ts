import Api from "./api";

const SportyService = {
  getSportList(query: string) {
    return Api().get(`/factsCenter/popularAndSportList?sportId=sr%3Asport%3A1&timeline=&productId=3&_t=${Math.floor(Date.now() / 1000)}`)
  },
}

export default SportyService