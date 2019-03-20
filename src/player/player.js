import React, {Component} from 'react';

class Player extends Component {
  
 
  
  render() {

    
    const {idMainVideo, infoMainVideo} = this.props;
    console.log(idMainVideo);
    console.log(infoMainVideo);

// channelId: "UCqbqVFErhI8HbqSerYFIn7Q"
// channelTitle: "AutoreviewRu"
// commentCount: "874"
// description: "Олег Растегаев сравнил новую Мазду СХ-5 с Хондой CR-V последнего поколения. Кто лучше? ↵↵Читайте  подробный сравнительный тест бензиновых кроссоверов Mazda CX-5 и Honda CR-V против дизельных паркетников Kia Sportage и Volkswagen Tiguan: https://autoreview.ru/articles/sravnitel-nye-testy/para_na_paru↵↵Подписывайтесь на сайт: https://autoreview.ru/subscribe↵↵Группа ВКонтакте: http://vk.com/autoreview↵Сообщество на Facebook: https://www.facebook.com/Autoreview↵Instagram: http://instagram.com/autoreview_ru↵Лента Twiiter: https://twitter.com/AutoreviewRu"
// dislikeCount: "590"
// id: "ppOFiX-T_yM"
// imageUrl: "https://i.ytimg.com/vi/ppOFiX-T_yM/default.jpg"
// likeCount: "4837"
// publishedAt: "2017-09-04T15:50:01.000Z"
// title: "Mazda CX-5 или Honda CR-V? Сравнительный тест на асфальте и бездорожье"
// viewCount: "611041"


    const {title, viewCount, likeCount, dislikeCount, imageUrl, channelTitle, publishedAt, description, commentCount} = infoMainVideo;
    return (
      <div>
          <div id="video" className="video">
                      <iframe width="720" height="405"
                      src={`https://www.youtube.com/embed/${idMainVideo}`} 
                      frameBorder="0" 
                      allowFullScreen
                      title="qwer">
                      </iframe>
          </div>
          <div>
            <div>
                {title}
            </div>
            <div>
              <div>{viewCount} Переглядів</div>
              <div>
                <span>
                  {likeCount}
                </span>
                <span>
                  {dislikeCount}
                </span>
              </div>
            </div>
            <div>
              <img src={imageUrl} alt={channelTitle} />
              <div>
                <p>{channelTitle}</p>
                <p>{publishedAt}</p>
              </div>
              <div>
                {description}
              </div>
              <div>
                {commentCount}
              </div>
            </div>
            
          </div>
      </div>
    );
  }
}

export default Player;