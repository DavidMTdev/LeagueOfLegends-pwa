import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import actions from '../actions'

const Builds = () => {
  const dispatch = useDispatch()
  const tokenBuilds = useSelector(state => state.build.tokenBuilds)
  const builds = useSelector(state => state.build.builds)
  const [name, setName] = useState('')

  const onClickNewBuild = () => {
    if (name) {
      const newBuilds = [
        ...builds,
        {
          name: name,
          items: []
        }
      ]

      localStorage.setItem(tokenBuilds, JSON.stringify(newBuilds))
      dispatch(actions.build.newBuild(name))
    } else {
      console.log('no')
    }
  }

  return (
    <div>
      <p>My Builds</p>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        name='name'
        type='text'
      />
      <button onClick={onClickNewBuild}>New Build</button>
      <div>
        {builds &&
          builds.map((item, index) => (
            <div key={index}>
              <div>
                <p>{item?.name}</p>
              </div>
              <div>
                <p>Items :</p>
                <div>
                  {item?.items.map((key, index) => (
                    <div key={index}>
                      <p>{key.name}</p>
                      <img
                        src={`http://ddragon.leagueoflegends.com/cdn/11.22.1/img/item/${key.image.full}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Builds
