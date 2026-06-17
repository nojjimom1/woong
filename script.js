function analyze(){

let total = 0;

for(let i=1;i<=6;i++){

let selected =
document.querySelector(`input[name=q${i}]:checked`);

if(!selected){
alert("모든 문항을 선택해주세요.");
return;
}

total += Number(selected.value);
}

let resultTitle="";
let description="";
let recommendation="";
let risk=0;

if(total <= 9){

resultTitle="🛡️ 안정형";
description="원금 보존을 최우선으로 생각하는 투자자입니다.";
recommendation="CMA · 파킹통장 · MMF";
risk=20;

}
else if(total <=14){

resultTitle="🌿 안정추구형";
description="위험은 최소화하면서 예금 이상의 수익을 추구합니다.";
recommendation="로보어드바이저 · 채권 ETF · 배당 ETF";
risk=40;

}
else if(total <=19){

resultTitle="📈 위험중립형";
description="안정성과 수익성의 균형을 추구합니다.";
recommendation="ETF 적립식 · S&P500 ETF · ISA";
risk=65;

}
else{

resultTitle="🚀 적극투자형";
description="높은 수익을 위해 큰 위험을 감수할 수 있습니다.";
recommendation="성장주 · 개별주식 · 테마 ETF";
risk=90;

}

document.getElementById("result").style.display="block";

document.getElementById("result").innerHTML=`

<h2>${resultTitle}</h2>

<p>${description}</p>

<h3>추천 투자 방식</h3>
<p>${recommendation}</p>

<h3>투자 위험도</h3>

<div class="risk-bar">
<div class="risk-fill" style="width:${risk}%">
${risk}%
</div>
</div>

<hr>

<h3>📚 초보자 투자 가이드</h3>

<div class="guide">

<div class="card">
<h4>소수점 투자</h4>
<p>1000원 단위로 미국 우량주 투자 가능</p>
</div>

<div class="card">
<h4>로보어드바이저</h4>
<p>AI가 자동으로 포트폴리오를 관리</p>
</div>

<div class="card">
<h4>CMA</h4>
<p>하루만 맡겨도 이자가 발생하는 금융상품</p>
</div>

<div class="card">
<h4>ETF</h4>
<p>한 종목으로 수십~수백 개 기업에 분산 투자</p>
</div>

</div>

<hr>

<h3>🏦 주요 증권사 수수료 비교</h3>

<table>
<thead>
<tr>
<th>증권사</th>
<th>특징</th>
<th>초보자 적합도</th>
</tr>
</thead>

<tbody>

<tr>
<td>토스증권</td>
<td>직관적인 UI, 소수점 투자</td>
<td>★★★★★</td>
</tr>

<tr>
<td>카카오페이증권</td>
<td>잔돈 투자, 쉬운 접근성</td>
<td>★★★★★</td>
</tr>

<tr>
<td>한국투자증권</td>
<td>CMA 강점</td>
<td>★★★★☆</td>
</tr>

<tr>
<td>미래에셋증권</td>
<td>ETF 및 ISA 강점</td>
<td>★★★★☆</td>
</tr>

<tr>
<td>삼성증권</td>
<td>ETF, 연금투자 강점</td>
<td>★★★★☆</td>
</tr>

</tbody>
</table>

`;
}