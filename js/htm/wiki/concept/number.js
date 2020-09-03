/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Concept/Number/Number']=Kx(
detail('数集',
	brA([
		['整数','有理数','实代数数','实数','复数'].join('⊂'),
		['整数环','有理数域','代数整数环','代数数域','复数域'].join('⊂'),
	])
)+


detail('数类型',Table([ZLR('名称 记法 定义 性质')],[
	['自然数\n非负整数\nnatural\nnonnegative integer','自然数集N','',ul([''])],
	['整数\ninteger','整数集Z',''],
	['小数\ndecimal','','',ul([''])],
	['有限小数\nfinite decimal','','',ul([''])],
	['无限小数\ninfinite decimal','','',ul([''])],
	['无限不循环小数\ninfinite irrecurring decimal','','',ul([''])],
	['纯小数\npure decimal','','整数部分为0',ul([''])],
	['带小数\n混小数\nmixed decimal','','整数部分不为0',ul([''])],
	['循环小数\nrecurring decimal','','',ul([''])],
	['纯循环小数\npure recurring decimal','0.\\dot{a}','a是循环节（长度为t）',ul([
		'化成分数$'+frac('a','10^t-1','')+'$',
		'小于1的既约分数$'+frac('a','b','')+'$能化成纯循环小数\n$⇔(b,10)=1$'
		])],
	['混循环小数\nmixed recurring decimal','0.b\\dot{a}','$a是循环节（长度为t）$\n$b是非循环节（长度为s）$',ul([
		'化成分数$'+frac('b','10^s','')+'+'+frac('a','10^s','')+'(10^t-1)$',
		'小于1的既约分数$'+frac('a','b','')+'$能化成混循环小数\n$⇔b=2^α⋅5^β⋅c，其中(c,10)=1$'
	])],
	['分数\nfraction','$'+frac('m','n','')+'$\n$m/n$','分子numerator\n分母denominator',ul([''])],
	['单位分数\n分数单位\nfraction unit',frac(1,'n',''),'',ul([''])],
	['真分数\nproper fraction',frac('m','n',''),'m < n',ul([''])],
	['假分数\nimproper fraction',frac('m','n',''),'m≥n',ul([''])],
	['带分数\nmixed fraction','a'+frac('b','c',''),'$a+'+frac('b','c','')+'$\n$其中b < c$',ul([''])],
	['可约分数\n非既约分数reducible fraction',frac('m','n',''),'(m,n)>1',ul([''])],
	['既约分数\n最简分数\n不可约分数irreducible fraction',frac('m','n',''),'(m,n)=1',ul([''])],
	['简分数\nsimple fraction',frac('m','n',''),'m、n都是正整数',ul([''])],
	['繁分数\ncomplex fraction','','分子或分母是分数的分数',ul([''])],
	['连分数\nnested fraction','','连续嵌套分数',ul([''])],

	['百分数\n百分率\n百分比\npercentage\npercent','a%',frac('a',100,''),ul([''])],
	['千分数\n千分率\n千分比\nper mille','a‰',frac('a',1000,''),ul([''])],
	['万分数\n万分率\n万分比','a‱',frac('a',10000,''),ul([''])],
	['成数\n十分数\ntenth','',frac('a',10,''),ul(['常用于增加'])],
	['折数\n折扣\ndiscount','',frac('a',10,''),ul(['常用于减少'])],

	['算术数\n非负有理数\narithmetic\nnonnegative rational','','0、正整数、正分数\n（正有限小数、正无限循环小数）的统称',ul([''])],

	['有理数\nrational','','整数、分数的统称',ul([''])],
		
	['代数数\nalgebraic','','满足有理系数代数方程的根',ul(['代数数集合可数，与自然数集合'+ksc('\\mathbb{N}')+'，整数集合'+ksc('\\mathbb{Z}')+'，有理数集合'+ksc('\\mathbb{Q}')+'等势'+ksc(kbox('Cantor'))
		
		])],
	['代数整数\nalgebraic integer','','满足整系数代数方程的根',ul([''])],
		
	['超越数\ntranscendental','','不是代数数的实数或复数\n不满足有理系数代数方程'],
		
	['无理数\nirrational','','无限不循环小数的统称','无理数（无限不循环小数）'+piece(['无理代数数','超越数']),''],
	['实数\nreal','','有理数和无理数的统称',piece(['实数'+piece(['有理数','无理数']),'实数'+piece(['正数',0,'负数'])])],
	['虚数\nimaginary',piece([['a+bi','代数形式'],['(a,b)','几何形式'],['r(\\cosθ+i\\sinθ)','三角形式（极形式）'],['re^{iθ}','指数形式'],
			[zmtrx([['a','b'],['-b','a']]),'矩阵形式（共轭等于转置）']]),
		'',piece(['虚数'+piece(['纯虚数','非纯虚数'])])],
	['纯虚数\npure imaginary','bi','',ul([''])],
	['复数\ncomplex',piece([['a+bi','代数形式'],['(a,b)','几何形式'],['r(\\cosθ+i\\sinθ)','三角形式（极形式）'],['re^{iθ}','指数形式'],
			[zmtrx([['a','b'],['-b','a']]),'矩阵形式（共轭等于转置）'],
			[kdet(MfS('a bi;bi a')),'模的平方'],
			]),
		'实数和虚数的统称',piece(['复数'+piece(['实数','虚数'])])],

	['四元数\n哈密顿数\nHamilton Number\nQuaternion','','',ul([
		])],

	['八元数\nOctonion','','',ul([
		])],

	['十六元数\nSedenion','','',ul([
		])],

	['分裂复数\n双曲复数\nSplit Complex\nHyperbolic complex numbers',piece([['a+bj','代数形式'],['(a,b)','几何形式'],['r(\\cosh θ+j\\sinh θ)','三角形式（极形式）'],['re^{iθ}','指数形式'],
		[zmtrx([['a','b'],['b','a']]),'矩阵形式（共轭等于转置）'],
		[kdet(MfS('a bj;-bj a')),'模的平方']
		])+kbr+'j^2=+1',
		'',''],


	['三元数\nTernion number',piece([['i^2=j^2=ij=ji=0',''],
		['a+bi+cj','代数形式'],['(a,b,c)','几何形式'],['','三角形式（极形式）'],['','指数形式'],
		[zmtrx([['a','bi','cj'],['cj','a','bi'],['bi','cj','a']]),'矩阵形式（轮换矩阵）'],
		['注意','共轭不等于转置'],
		[kdet(MfS('a bi cj;cj a bi;bi cj a'))+'=a^3','']
		])
		,
		
	'',piece(['A=(a,b,c)',
			'B=(x,y,z)',
			'A+B=(a+x,b+y,c+z)',
			'A-B=(a-x,b-y,c-z)',
			'AB=(ax, ay+bx, az+cx)',
			'kA=k(a, b, c) 其中k是实数',
			'iA=(0, a, 0) 旋转',
			'jA=(0, 0, a) 旋转',

			'双线性'+piece(['(k+l)A=kA+lA','k(A+B)=kA+kB']),
			'共轭A^*=(a,-b,-c)=-A+2a',
			'A+A^*=2a',
			'模|A|=|a|',
			'AA^*=|A|^2=║A║=a^2',
			'-A=(-a,-b,-c)',
			Eq([['A^n','(a,b,c)^n=(a+bi+cj)^n'],
				'(a^n,na^{n-1}b,na^{n-1}c)',
				'a^n(1,nb/a,nc/a)',
				'na^{n-1}(a/n, b, c)',
				'a^{n-1}(a, nb, nc)',
				'na^{n-1}A-(n-1)a^n',
			],'','br'),
			piece(['(1,b,c)^n=(1,nb,nc)',
				'i^n=j^n=0 （其中n是正整数）',
				'i^0=j^0=1=A^0',
			]),
			'A^2=(a^2,2ab,2ac)=a^2(1,2b/a,2c/a)=2aA-a^2',
				'\\qquad =2a(a\\/2, b, c)=a(a,2b,2c)',
			'A^3=(a^3,3a^2b,3a^2c)=a^3(1,3b/a,3c/a)=3a^2A-2a^3',
				'\\qquad =3a^2(a\\/3, b, c)=a^2(a,3b,3c)',
			'多项式P_n(A)=a_nA^n+a_{n-1}A^{n-1}+⋯+a_1A+a_0',
				'\\qquad =(na_na^{n-1}+(n-1)a_{n-1}a^{n-2}+⋯+2a_2a+a_1)A',
				'\\qquad +a_0-a_2a^2-2a_3a^3-⋯-(n-1)a_na^n',

			Eq([['1/A','A^{-1}'],
				'(1/a,-b/a^2,-c/a^2)',
				'1\\/a(1,-b/a,-c/a)',
				'-1\\/{a^2}(-a,b,c)=a^{-2}(a,-b,-c)',
				'\\frac{A^*}{a^2}=\\frac{A^*}{|A|^2}=\\frac{A^*}{║A║}',
				'-A/a^2+2/a',
				'(2a-A)/a^2'
			],'','br'),

			Eq([['1/A^n','A^{-n}'],
				'(1/a^n,-nb/a^{n+1},-nc/a^{n+1})',
				'\\frac{1}{a^n}(1, -nb/a, -nc/a)',
				'-\\frac{n}{a^{n+1}}(-a\\/n, b, c)',
				'-nA/a^{n+1}+(n+1)/a^n',
				'((n+1)a-nA)/a^{n+1}'
			],'','br'),
			Eq([['A/B','AB^{-1} = \\frac{AB^*}{x^2}'],
				'(a/x, a(-y/x^2)+b/x, a(-z/x^2)+c/x)',
				zp('a\\/x,~ -\\frac{ay-bx}{x^2},~ -\\frac{az-cx}{x^2}'),
				'1\\/{x^2}(ax, bx-ay, cx-az)',
				'1\\/xA-a\\/{x^2}B+a\\/x',
				'1\\/xA+a\\/{x^2}B^*-a\\/x'],
				['其中x≠0'],'br'),
			'1/A^*=(A^*)^{-1}=A\\/{a^2}',
			'A/A^*='+zp('1,~ 2\\frac{b}{a},~ 2\\frac{c}{a}')+'= 2\\/aA-1',

			'A^{1\\/n}='+kroot('A','n')+'='+zp(kroot('a','n')+',~ \\frac{'+kroot('a','n')+'}{an}b,~ \\frac{'+kroot('a','n')+'}{an}c'),
				'\\qquad = '+kroot('a','n')+zp('1, \\frac{b}{an}, \\frac{c}{an}'),
				'\\qquad = \\frac{a^{1\\/n-1}}{n}(na,b,c)',
				'\\qquad = a^{1\\/n-1}(a, b\\/n, c\\/n)',
				'\\qquad = \\frac{'+kroot('a','n')+'}{an}A+\\frac{n-1}{n}'+kroot('a','n'),

			Eq([['A^{\\frac{n}{m}}','(a,b,c)^{n/m}=(a+bi+cj)^{n/m}'],
				'(a^{n/m},na^{n/m-1}b/m,na^{n/m-1}c/m)',
				'a^{n/m}(1,{nb}\\/{am},{nc}\\/{am})',
				'\\frac{na^{n/m-1}}{m}(am/n, b, c)',
				'a^{n/m-1}(a, nb/m, nc/m)',
				'\\frac{na^{n/m-1}}{m}A-(n/m-1)a^{n/m}',
			],'','br'),
		])+kbr+piece(['满足加法交换率、结合律','满足乘法交换率、结合律','满足乘法对加法的分配率',
			'数域',
			'三元数是实数域上的线性空间',
			])+kbr+'定义特点（缺点）：'+kbr+
		piece([
			'模与虚元无关，只与实数项分量的绝对值有关',
			'开方可能无解（负实数时），',
			'代数学基本定理不再成立'
		])],


],'wiki').replace(/\n/g,br))
+refer([
	enwiki("Split-complex_number"),


	inhref('wiki.html?q=Formula/Equation/Diophantus'),
	inhref('wiki.html?q=Formula/Polynomial/Identity'),
])+


detail('乘积尾数（个位数）',Table([['a尾数','a^{4n}尾数','a^{4n+1}尾数','a^{4n+2}尾数（例如平方尾数）','a^{4n+3}尾数（例如立方尾数）','因子分解']],[
	ZLR('0 0 0 0 0 0×0⋯9，2×5，4×5，6×5，8×5'),
	ZLR('1 1 1 1 1 1×1，3×7，9×9'),
	ZLR('2 6 2 4 8 1×2，2×6，3×4，4×8，6×7，8×9'),
	ZLR('3 1 3 9 7 1×3，7×9'),
	ZLR('4 6 4 6 4 1×4，2×2，2×7，3×8，4×6，6×9，8×8'),
	ZLR('5 5 5 5 5 1×5，3×5，5×5，5×7，5×9'),
	ZLR('6 6 6 6 6 1×6，2×3，2×8，4×4，4×9，6×6，7×8'),
	ZLR('7 1 7 9 3 1×7，3×9'),
	ZLR('8 6 8 4 2 1×8，2×4，2×9，3×6，4×7，6×8'),
	ZLR('9 1 9 1 9 1×9，3×3，7×7'),

],'wiki').replace(/\n/g,br))+

detail('重要常数',Table([ZLR('名称 定义 符号 近似小数 类型 性质')],[
	['自然常数',lim('n','',lrp('','1+'+frac(1,'n',''),'','')+'^n','',''),'e','2.7 1828 1828 4590 4523','超越数（一种无理数）',''],
	['圆周率','圆的周长与直径的比值','π','3.1415926535 8979323846 2643383279','超越数（一种无理数）',ul([
		''
		])],
	['普遍抛物线常数\nUniversal Parabolic Constant','抛物线弧长与正半焦距（Semilatus rectum）的比值\n类比于圆周率（圆周一半与半径之比）',
		Eq([kroot(2)+'\\ln(1+'+kroot(2)+')',kroot(2)+'\\sinh^{-1}1',kroot(2)+'\\cosh^{-1}'+kroot(2)]),
		'2.2955871','超越数（一种无理数）',ul([
		''
		])],
	
	['黄金分割比\ngolden ratio',frac(kroot(5)+' +1',2,''),'Φ','1.618033988749894848204586834366','代数数（一种无理数）',kul([
		'满足代数方程x^2-x-1=0',
		Eq([['Φ','Φ^2-1'],kroot('Φ+1'),1+'+'+frac(1,'Φ',''),frac(1,'Φ-1','')]),
		kxA(['几何解释：','长方形长Φ宽1，','剪去正方形1×1后，','长宽比不变Φ:1 = 1:Φ-1']),
		'Φ^2 = Φ+1',
		kroot('Φ')+' = '+kroot('Φ^2-1')+' ≈ '+frac(4,'π',''),
		frac(1,'Φ','')+' = Φ-1',
		Eq([['Φ^n','Φ^{n-1}+Φ^{n-2}'],'ΦF_n+F_{n-1}',frac('L_n+F_n'+kroot(5),2,'')]),
		Eq([['Φ',mfracs([1,1,1,1],[1,1,1,1,1],0,1,'','')],mroots('',[1,1,1,1,1],0,1,'','','')]),
		Eq([[frac(1,'Φ',''),mfracs([1,1,1,1],[1,1,1,1],0,1,'','')],kroot(mroots('',[1,1,1,1],0,1,'','',''))]),
		Eq([['Φ','1+2\\sin'+frac('π',10,''),'1+2\\sin18°'],
				['',frac('\\sec'+frac('2π',5,'t'),2,''),frac('\\sec72°',2,'')],
				['',frac('\\csc'+frac('π',10,'t'),2,''),frac('\\csc18°',2,'')],
				['','2\\sin'+frac('3π',10,''),'2\\sin54°'],
				['','2\\cos'+frac('π',5,''),'2\\cos36°'],
		]),
		Eq([[frac(1,'Φ',''),'2\\sin'+frac('3π',10,'')+'-1','2\\sin54°-1'],
				['',frac('\\sec'+frac('π',5,''),2,''),frac('\\sec36°',2,'')],
				['',frac('\\csc'+frac('3π',10,''),2,''),frac('\\csc54°',2,'')],
				['','2\\sin'+frac('π',10,''),'2\\sin18°'],
				['','2\\cos'+frac('2π',5,''),'2\\cos72°'],
		]),
		''
		])],
	['白银分割比\nsilver ratio',kroot(2)+'+1','δ_S','2.4142135623','代数数（一种无理数）',kul([
		'满足代数方程x^2-2x-1=0',
		Eq([['δ_S ≝ x',frac('x^2-1',2,'')],kroot('2x+1'),2+'+'+frac(1,'x',''),frac(1,'x-2','')]),
		kxA(['几何解释：','长方形长x宽1，','剪去两个正方形1×1后，','长宽比不变','x:1 = 1:x-2 = 1+'+kroot(2)]),
		kxA(['A4纸：长方形长x-1宽1','长边对折后长宽比不变','x-1:1 = 1:(x-1)/2 = '+kroot(2)]),
		'x^2 = 2x+1',
		kroot('x')+' = '+kroot(frac('x^2-1',2,''))+' ≈ ',
		frac(1,'x','')+' = x-2',
		Eq([['x^n','Φ^{n-1}+Φ^{n-2}'],'ΦF_n+F_{n-1}',frac('L_n+F_n'+kroot(5),2,'')]),
		Eq([['δ_S',mfracs([1,1,1,1],[2,2,2,2,2],0,1,'','')],mroots('',[1,1,1,1,1],0,1,'','','')]),
		Eq([[frac(1,'δ_S',''),mfracs([1,1,1,1],[1,1,1,1],0,1,'','')],kroot(mroots('',[1,1,1,1],0,1,'','',''))]),
		Eq([['δ_S','1+2\\sin'+frac('π',10,''),'1+2\\sin18°'],
				['',frac('\\sec'+frac('2π',5,''),2,''),frac('\\sec72°',2,'')],
				['',frac('\\csc'+frac('π',10,''),2,''),frac('\\csc18°',2,'')],
				['','2\\sin'+frac('3π',10,''),'2\\sin54°'],
				['','2\\cos'+frac('π',5,''),'2\\cos36°'],
		]),
		Eq([[frac(1,'δ_S',''),'2\\sin'+frac('3π',10,'')+'-1','2\\sin54°-1'],
				['',frac('\\sec'+frac('π',5,''),2,''),frac('\\sec36°',2,'')],
				['',frac('\\csc'+frac('3π',10,''),2,''),frac('\\csc54°',2,'')],
				['','2\\sin'+frac('π',10,''),'2\\sin18°'],
				['','2\\cos'+frac('2π',5,''),'2\\cos72°'],
		]),
		''
		])],
		

	
	
	
	['欧拉常数\nEuler\nEuler–Mascheroni','','γ','','是否无理数未知',''],
	['虚数单位','','i','','虚数',''],
	['布隆常数\nBrun','所有孪生素数倒数之和的极限','','1.902160583104','是否无理数未知',''],
	['Skewes数\n','','满足$π(x) > '+kxf('li')+'(x)$\n的最小正整数$x$的上界',ul([
		'南非数学家Skewes证明了，在黎曼假设成立情况下，$x有上界'+msups(['e','e','e',79],'')+' < '+msups([10,10,10,34],'')+'$',
		'无论黎曼假设是否成立，$x有上界'+msups(['e','e','e','e',7.705],'')+' < '+msups([10,10,10,964],'')+'$',
		])],
	['n次单位根\nn-th unit kroot','','ω','','代数数（一种无理数）',kul([
		kxA(['满足代数方程ω_n=1','即ω_n-1=0','也即(ω-1)(ω^{n-1}+ω^{n-2}+⋯+ω+1)=0']),
		kxA(['ω_k = e^{i'+frac('2kπ','n','')+'} = \\cos'+frac('2kπ','n','')+'+i\\sin'+frac('2kπ','n',''),'其中k=0,1,2,⋯,n-1']),
		'|ω_k|=1',
		'ω_jω_k=ω_{j+k}是n次单位根',
		kxA(['ω_j^k=ω_{jk}=ω_k^j是n次单位根','其中j是任意整数']),
		kxo('ω_k')+'(共轭数)是n次单位根',
		'1+ω_1^m+ω_2^m+⋯+ω_{n-1}^m='+piece([['m','当n|m时'],[0,'当n∤m时']]),
		'1+ω+ω^2+⋯+ω^{n-1}='+piece([['n','当ω=1时'],[0,'当ω≠1时']]),
		'全部n次单位根把复平面单位圆周n等分',
		'全部n次单位根之和为0',
		'全部n次单位根都可以写成n次单位原根的幂',
		])
	],

	['格雷厄姆数\n葛立恒数\nGraham\'s number',
		'某个拉姆齐问题：对一个$n$维超立方体的$2^n$个顶点之间所有连线（得到一个完全图）并填色（红或蓝）\n使得所有填法都满足在四个共面顶点上至少有一个单色完全子图的最小$n$值',
		'g_{64}','','正整数',kul([
		'g_n='+piece([['3↑↑↑↑3','当n=1时'],['3↑^{g_n}3','当n≥2时']]),
		'记f(x)=x^x, g_{64}=f^{64}(4)'
		])],
],'wiki').replace(/\n/g,br))
			


);