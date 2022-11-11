import React from "react";
import config from "../config.json"
import styled from "styled-components"
import Menu from "../src/components/Menu/index"
import { StyledTimeline } from "../src/components/Timeline"


function HomePage() {

    
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
  

    return (
        <>
            
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                {/*Prop driling */}
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
                <main style={{display: "flex", flexDirection: "column", flex: 1}}>
                    <Header  />
                    <Timeline playlists={config.playlists} searchValue={valorDoFiltro}>
                        conteudo:

                    </Timeline>
                </main>
            </div>
        </>
    )
  }
  
  export default HomePage

  

  const StyledHeader = styled.div`
    background-color:  ${({ theme }) => theme.backgroundLevel1};
    img {
        width: 80px;
        height: 80px;
        border-radius:50%;

    }
    .user-info{
        margin-top: 15px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
  `;
    const StyledBanner = styled.div`
        background-color: gray;
        background-image: url(${({ bg }) => bg});
        height: 230px;
        
        
`;
 
  function Header(props){
    return(
        <StyledHeader>

            <StyledBanner bg={config.bg} />
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.Job}</p>
                </div>
               
            </section>
        </StyledHeader>
    )
  }

  function Timeline({searchValue, ...props}){

    const playlistNames = Object.keys(props.playlists);
  
    return(
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
  
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
  
                           {videos.filter((video) =>  {
  
                                const titleNormlized = video.title.toLowerCase();
                                const searchValueNormalized = searchValue.toLowerCase();
  
                                return titleNormlized.includes(searchValueNormalized)
  
                                })
                                .map((video) => {
                                    return (
                                        <a href={video.url} key={video.url}>
                                            <img  src={video.thumb}/>
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
            
        </StyledTimeline>
    )
  }


  