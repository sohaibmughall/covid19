import React from 'react';
import { useGetstatesQuery } from '../../services/api';


export default function Singlepeview() {

    let name = localStorage.getItem("id").toLocaleLowerCase()

    const { data, error, isLoading } = useGetstatesQuery(name)

    return (
        <div class="main-wrapper" >
            <div className='row'>
                <div className='col-12'>
                    <div class="card">
                        <div class="card-body">
                            {error ? (
                                <>Oh no, there was an error</>
                            ) : isLoading ? (
                                <div class="spinner-grow" style={{ width: 130, height: 130 }} role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            ) : data ? (
                                <>
                                    <h1 >{data.name}</h1>
                                    <h5><span style={{ color: "red", textAlign: "left" }}>{data.notes}</span></h5>
                                    <hr />
                                    <div className='text-left'>
                                        <p> <iframe src={data.covid19Site} height="600" width="100%" title="Iframe Example"></iframe></p>
                                        <p> <iframe src={data.covid19SiteSecondary} height="600" width="100%" title="Iframe Example"></iframe></p>
                                        <p> <iframe src={data.covid19SiteTertiary} height="600" width="100%" title="Iframe Example"></iframe></p>
                                        <p> <iframe src={data.covid19SiteOld} height="600" width="100%" title="Iframe Example"></iframe></p>
                                        <p> covidTrackingProjectPreferredTotalTestUnits : {data.covidTrackingProjectPreferredTotalTestUnits}</p>
                                        <p> covidTrackingProjectPreferredTotalTestField : {data.covidTrackingProjectPreferredTotalTestField}</p>
                                        <p> totalTestResultsField : {data.totalTestResultsField}</p>
                                        <p> Pui : {data.pui}</p>
                                        <p> fips : {data.fips}</p>
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}
