import axios from 'axios'
import {
  API_STARTED_CHAMPION,
  API_SUCCESS_CHAMPION,
  API_FAILURE_CHAMPION,
  API_SUCCESS_CHAMPIONS
} from '../config/type'

export const fetchChampions = (version, language) => dispatch => {
  dispatch(started())

  axios({
    method: 'GET',
    url: `http://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/champion.json`
  })
    .then(res => {
      let array = []

      Object.keys(res.data.data).map(key => {
        const data = {
          version: res.data.data[key].version,
          id: res.data.data[key].id,
          key: res.data.data[key].key,
          name: res.data.data[key].name,
          title: res.data.data[key].title,
          blurb: res.data.data[key].blurb,
          info: res.data.data[key].info,
          tags: res.data.data[key].tags,
          partype: res.data.data[key].partype,
          stats: res.data.data[key].stats,
          images: {
            square: `https://cdn.communitydragon.org/${version}/champion/${key}/square`,
            splashArt: `https://cdn.communitydragon.org/${version}/champion/${key}/splash-art`,
            splashArtCentered: `https://cdn.communitydragon.org/${version}/champion/${key}/splash-art/centered`
          }
        }
        array = [...array, data]
      })
      dispatch(success(API_SUCCESS_CHAMPIONS, array))
    })
    .catch(err => {
      dispatch(failure(err.message))
    })
}

export const fetchChampion = (version, language, name) => dispatch => {
  dispatch(started())

  axios({
    method: 'GET',
    url: `http://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/champion/${name}.json`
  })
    .then(res => {
      const data = res.data.data[name]
      dispatch(success(API_SUCCESS_CHAMPION, data))
    })
    .catch(err => {
      dispatch(failure(err.message))
    })
}

const started = () => ({
  type: API_STARTED_CHAMPION
})

const success = (type, data) => ({
  type: type,
  payload: data
})

const failure = error => ({
  type: API_FAILURE_CHAMPION,
  payload: {
    error
  }
})
