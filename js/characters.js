(function(){
  const aliases={sprig:'sprout',bloom:'blossom',cactus:'cactus'};
  const names={sprout:'Sprout',blossom:'Blossom',cactus:'Cactus'};
  const layout={
    sprout:{scale:1,baseline:0},
    blossom:{scale:.94,baseline:2},
    cactus:{scale:.96,baseline:0}
  };
  const root='assets/characters/';
  const kind=value=>aliases[value]||value||'sprout';
  function growthIndex(stage=1,progress=0){
    const total=Math.max(0,Math.min(100,(((stage-1)*100)+progress)/3));
    return total<13?0:total<38?1:total<63?2:total<88?3:4;
  }
  function asset(value,{stage=4,progress=100,mood,pose}={}){
    const k=kind(value);
    if(pose)return`${root}${k}/poses/${pose}.png`;
    if(mood)return`${root}${k}/moods/${mood}.png`;
    return`${root}${k}/growth/${growthIndex(stage,progress)}.png`;
  }
  function image(value,options={}){
    const k=kind(value),meta=layout[k];
    const growth=growthIndex(options.stage,options.progress);
    const cls=['plant','character-art',options.mood==='sad'?'sad':'',options.pose?`pose-${options.pose}`:''].filter(Boolean).join(' ');
    const label=options.label||`${names[k]} plant character`;
    return`<img class="${cls}" data-growth="${growth}" src="${asset(k,options)}" alt="${label}" style="--character-scale:${meta.scale};--character-baseline:${meta.baseline}px" draggable="false">`;
  }
  window.GWMCharacters={asset,image,kind,names,layout,growthIndex};
})();
