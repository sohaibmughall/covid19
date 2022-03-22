import React, { useEffect, useState } from 'react';

import { getStatesinfo, getCurrentValue } from '../../apis/apis'
import { useNavigate } from 'react-router-dom';
import Singlepeview from './../singlepage/index';

export default function Dashboard() {

  const [Data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    getapi()
  }, [])

  const getapi = async () => {
    try {
      let info = await getStatesinfo()
      setData(info)
      setLoading(false)
    } catch (error) {
      alert("error-------------------" + error)
    }
  }

  const nextpage = (item) => {
    localStorage.setItem("id", item.state)
    navigate(`/preview?=${item.state}`)
  }
  const search = (e) => {
    localStorage.setItem("id", e.target.value)
    navigate(`/preview?=${e.target.value}`)
  }


  return (
    <>
      <div class="main-wrapper">
        <select class="custom-select" onChange={(e) => search(e)} style={{position:'relative'}}>
          {
            Data.filter(data => data.negative && data.positive && data.recovered).slice(0, 100).map(items => {
              return (
                <>
                  <option value={items.state} >{items.state}</option>
                </>
              )
            })
          }
        </select>
        <hr />
        <div className='row'>
          {
            loading ?
              <div style={{ position: "absolute", left: 0, top: 150, bottom: 0, right: 0 }}>
                <div class="spinner-grow" style={{ width: 130, height: 130 }} role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              :
              Data.filter(data => data.negative && data.positive && data.recovered).slice(0, 1000).map(item => {
                return (
                  <div className='col-sm-3 col-md-4 col-lg-3 '>
                    <div class="card">
                      <div class="card-body">
                        <h3 class="card-title">{item.state}</h3>
                        <h5> Total test result <span style={{ color: "red" }}>{item.totalTestResults}</span></h5>
                        <hr />
                        <div className='text-left'>
                          <p class="card-text">Positive : {item.positive}</p>
                          <p class="card-text">Negative : {item.negative}</p>
                          <p class="card-text">Death : {item.death}</p>
                          <p class="card-text">Recovered : {item.recovered}</p>
                        </div>
                        <hr />
                        <a href='' class="btn btn-primary" style={{ cursor: "pointer" }} onClick={() => nextpage(item)}> See More </a>
                      </div>
                    </div>
                  </div>
                )
              })
          }

        </div>
      </div>

    </>
  );
}
