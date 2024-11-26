import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Resume() {
  return (
    <div className="container mx-auto p-4 space-y-6 bg-gray-50 min-h-screen">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">김구름</h1>
        <p className="text-xl text-gray-600">데브옵스 엔지니어</p>
      </header>

      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-700">경력</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">구름</h3>
            <p className="text-gray-600">데브옵스 엔지니어</p>
            <p className="text-sm text-gray-500">2020년 - 2023년 (3년)</p>
          </div>
          <ul className="list-disc list-inside text-gray-700">
            <li>클라우드 인프라 관리 및 최적화</li>
            <li>CI/CD 파이프라인 구축 및 유지보수</li>
            <li>쿠버네티스 클러스터 운영</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-700">기술 스택</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-blue-500 text-white">AWS EC2</Badge>
            <Badge className="bg-blue-500 text-white">AWS S3</Badge>
            <Badge className="bg-gray-700 text-white">GitHub Actions</Badge>
            <Badge className="bg-blue-600 text-white">Kubernetes</Badge>
            <Badge className="bg-green-600 text-white">CI/CD</Badge>
            <Badge className="bg-yellow-500 text-gray-800">DevOps</Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-700">학력</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold text-gray-800">구름대학교</h3>
          <p className="text-gray-600">컴퓨터공학과</p>
          <p className="text-sm text-gray-500">졸업</p>
        </CardContent>
      </Card>

      <footer className="text-center text-gray-500 mt-8">
        <p>© 2023 김구름. All rights reserved.</p>
      </footer>
    </div>
  )
}

