export default {
  hotList (state) {
    const cate1 = state.cate1List.find(cate1 => cate1.id === state.currentCate1Id)
    const res = cate1.img.slice()
    res.scatid = cate1.scatid

    return res
  }
}
